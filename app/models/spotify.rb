class Spotify
  include HTTParty
  attr_accessor :user, :playlists

  def initialize(token)
    @headers = {
      "Authorization" => "Bearer #{token}",
      "Accept" => "application/json",
      "Content-type" => "application/json"
    }
    @user = HTTParty.get("https://api.spotify.com/v1/me", headers: @headers)
  end

  def playlists
    response = HTTParty.get("https://api.spotify.com/v1/me/playlists", headers: @headers)
    @playlists = response["items"]
  end

  def fetch_playlist_tracks(playlist)
    url = playlist["tracks"]["href"]
    tracks = HTTParty.get(url, headers: @headers)["items"]
  end

  def most_frequent_artists(playlist)
    tracks = fetch_playlist_tracks(playlist)
    artist_ids = tracks.map{|t| t["track"]["artists"].map{ |a| a["id"] }}.flatten.compact
    if artist_ids.uniq.length < 5
      artist_ids = artist_ids.uniq
    else
      counts = Hash.new 0
      artist_ids.each { |artist| counts[artist] += 1 }
      artist_ids = counts.sort.first(5).map(&:first)
    end
  end

  def get_recommendations_from_seeds artists
    seed_artists = artists.join(",")
    url = "https://api.spotify.com/v1/recommendations"
    query = "/?seed_artists=#{seed_artists}"
    recommendations = HTTParty.get(url + query, headers: @headers)["tracks"]
    begin
      uris = recommendations.map{ |track| track["uri"].split(":")[2] }
    rescue
      uris = []
    end
  end

  def discover_weekly
    self.playlists.select { |playlist|
      playlist["name"] == "Discover Weekly"
    }[0]
  end

  # TODO convert to recommendations via ajax
  def playlists_with_recommendations
    self.playlists.each do |playlist|
      artists = most_frequent_artists(playlist)
      recommendations = get_recommendations_from_seeds(artists)
      playlist["recommendations"] = recommendations
    end
  end

  def duplicate(playlist)
    tracks = fetch_playlist_tracks(playlist)
    id = @user["id"]
    # create new playlist
    new_playlist = HTTParty.post("https://api.spotify.com/v1/users/#{id}/playlists", body: {
      name: Time.now.strftime("%Y-%m-%d"),
      public: false
    }.to_json, headers: @headers)
    new_playlist_id = new_playlist["id"]
    # store each track's uri as an array
    uris = tracks.map{|t| t["track"]["uri"]}
    # add tracks to new playlist
    added_tracks = HTTParty.post("https://api.spotify.com/v1/users/#{id}/playlists/#{new_playlist_id}/tracks", body: {
      uris: uris
    }.to_json, headers: @headers)
  end
end
