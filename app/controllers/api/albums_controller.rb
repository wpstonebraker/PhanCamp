class Api::AlbumsController < ApplicationController

    def index
        @artist = User.find(params[:artist_id])
        @albums = Album.where(artist_id: @artist.id)
        render :index
    end

    def show
        @album = Album.find(params[:id])
        @tracks = Track.where(album_id: @album.id)
    end

end
