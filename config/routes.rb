Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"

  resources :artists, only: [:index, :create]
  resources :concerts, only: [:index, :create]
  resources :posts, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  resources :sessions, only: [:index, :create, :destroy]

  get '/session_cookies', to: 'sessions#show_cookies'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end


