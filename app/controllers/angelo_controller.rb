class AngeloController < ApplicationController
  def index
    spotify = Spotify.new(current_user.auth_token)
    @data = spotify.playlists_with_recommendations
    @user = current_user.as_json(only: [:uid, :email])
  end
end
