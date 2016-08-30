class AngeloController < ApplicationController
  def index
    spotify = Spotify.new(current_user.auth_token)
    @data = spotify.playlists
    @user = current_user.as_json(only: [:uid, :email])
  end
end
