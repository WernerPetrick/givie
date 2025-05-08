Rails.application.routes.draw do
  get "inertia-example", to: "inertia_example#index"

  get "help", to: "pages#help"
  get "features", to: "pages#features"
  get "profile", to: "users#profile"

  get "/sign_up", to: "users#new", as: "sign_up"
  post "/sign_up", to: "users#create"
  delete "/sign_out", to: "sessions#destroy", as: "sign_out"
  get "/sign_in", to: "sessions#new", as: "sign_in"
  post "/sign_in", to: "sessions#create"

  root "pages#index"
end
