Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
    end
    resources :genres, only: [:index]
    resources :landings, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show, :create, :update, :destroy]
    resources :features, only: [:index]
    resources :selling, only: [:index]
    resources :tracks, only: [:show, :update, :destroy]
    resource :phish_albums, only: [:create]
    get '/search', to: 'search#search'
  end


  

end
