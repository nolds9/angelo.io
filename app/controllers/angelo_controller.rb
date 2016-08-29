class AngeloController < ApplicationController
  def index
    user = Spotify.new(current_user.auth_token)
    @data = user.playlists 
  end
end
