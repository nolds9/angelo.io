Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  get '/', to: 'angelo#index'
  devise_scope :user do
    get "/logout" => "devise/sessions#destroy"
  end
  root to: "angelo#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
