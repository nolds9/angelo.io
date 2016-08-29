class CallbacksController < Devise::OmniauthCallbacksController
  def spotify
    @user = User.from_omniauth(request.env["omniauth.auth"])
    sign_in(@user)
    redirect_to "/"
  end
end
