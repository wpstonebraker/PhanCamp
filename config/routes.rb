Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show]
    resources :features, only: [:index]
    resources :selling, only: [:index]
  end


  

end
