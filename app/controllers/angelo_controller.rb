class AngeloController < ApplicationController
  def index
    spotify = Spotify.new(current_user.auth_token)
    @data = spotify.playlists
    @user = current_user.as_json(only: [:uid, :email])
  end

  def get_recommendations
    spotify = Spotify.new(current_user.auth_token)
    if params[:id]
      @recommendations = spotify.generate_recommendations params[:id]
      render json: @recommendations
    else
      render json: { status: "Failure, no ID provided"}
    end
  end
end
