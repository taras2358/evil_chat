Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: "chat#show"

  get  "/login", to: "auth#new"
  post "/login", to: "auth#create"
end
