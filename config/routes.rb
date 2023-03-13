Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"

  resources :artists, only: [:index, :create]
  resources :concerts, only: [:index, :create]
  resources :posts, only: [:index, :create, :update, :destroy]


  get '/me', to: "users#show"
  post '/login', to: "session#create"
  delete '/logout', to: "session#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end


