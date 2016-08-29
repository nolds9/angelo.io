class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable,
    :omniauthable, :omniauth_providers => [:spotify]

    def auth_token
      encoded_secret_id = Base64.strict_encode64(ENV["SPOTIFY_CLIENT_ID"] + ":" + ENV["SPOTIFY_CLIENT_SECRET"])
      body = {
        "grant_type" => 'refresh_token',
        "refresh_token" => self.refresh_token
      }
      res = HTTParty.post("https://accounts.spotify.com/api/token", body: body, headers: {
        "Authorization" => "Basic #{encoded_secret_id}",
        "Content-Type" => "application/x-www-form-urlencoded"
      })
      return res["access_token"]
    end

    def self.from_omniauth(auth)
      puts auth.inspect
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
        user.token = auth.credentials.token
        user.refresh_token = auth.credentials.refresh_token
      end
    end
  end
