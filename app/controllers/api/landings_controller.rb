class Api::LandingsController < ApplicationController

    def index
        @features = User.where(:artist_name => ['Phish', 'The Grateful Dead', 'Ween', 'Goose']).includes(banner_attachment: :blob, thumbnail_attachment: :blob).order(id: :asc)
        @albums = Album.all.order(id: :asc)
        @genres = Genre.all
    end
    
end
