class Api::FeaturesController < ApplicationController

    def index
        @albums = Album.all
        @features = User.where(:artist_name => ['Phish', 'The Grateful Dead', 'Ween', 'Goose']).order(id: :asc)
        @artists = User.where.not(:artist_name => ['Phish', 'The Grateful Dead', 'Ween', 'Goose'])
        @selling = Album.ids.sample(8)
        @daily = Album.order(id: :desc).limit(8).ids
    end

end
