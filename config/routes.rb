Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  devise_scope :user do
    get "/logout" => "devise/sessions#destroy"
  end
  get '/', to: 'angelo#index'
  root to: "angelo#index"
  get '/get_recommendations', to: 'angelo#get_recommendations'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
