Rails.application.routes.draw do
  root 'pages#index'
  namespace :api, defaults: {format: :json} do
    get 'restaurants/:id',            to: 'restaurants#show'
    get 'restaurants',                to: 'restaurants#index'

    get 'restaurant/:restaurant_id/comments',   to: 'comments#index'
    post 'restaurant/:restaurant_id/comment',   to: 'comments#create'
  end
  match '*path' => redirect('/'), via: :get
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
