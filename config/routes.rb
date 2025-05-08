Rails.application.routes.draw do
  get "inertia-example", to: "inertia_example#index"
  root "pages#index"
end
