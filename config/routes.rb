Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: "store/root#index"

  get  "/login", to: "auth#new"
  post "/login", to: "auth#create"

  resources :registrations, only: [:new, :create], controller: 'user/registration'
end
