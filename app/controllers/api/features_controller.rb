class Api::FeaturesController < ApplicationController

    def index
        # @albums = Album.all
        @albums = Album.all.includes(photo_attachment: :blob)
        @features = User.where(:artist_name => ['Phish', 'The Grateful Dead', 'Ween', 'Goose']).includes(banner_attachment: :blob, thumbnail_attachment: :blob).order(id: :asc)
        @artists = User.all.includes(banner_attachment: :blob, thumbnail_attachment: :blob)
        @genres = Genre.all
        @tracks = Track.joins(:album).where.not(albums: { artist_id: 33 }) # production
        # @tracks = Track.joins(:album).where.not(albums: { artist_id: 177 })
        @daily = Album.order(id: :desc).limit(8).ids
    end

end
