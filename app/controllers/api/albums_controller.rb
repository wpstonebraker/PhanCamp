class Api::AlbumsController < ApplicationController

    def index
        @artist = User.find(params[:artist_id])
        @albums = Album.where(artist_id: @artist.id)
        @genres = @artist.genres
        render :index
    end

    def show
        @album = Album.find(params[:id])
        @artist = @album.artist
        @tracks = Track.where(album_id: @album.id)
    end

    def create
        @album = Album.new(album_params)
        @artist = @album.artist

        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    private

    def album_params
        params.require(:album).permit(:title, :artist_id, :year, :price, :description, :credits)
    end

end
# class Api::AlbumsController < ApplicationController

#     def index
#         @artist = User.find(params[:artist_id])
#         @albums = Album.where(artist_id: @artist.id)
#         # @genre_joins = GenreJoin.where(id: @artist.genre_ids)
#         @genres = @artist.genres
#         # @genres = Genre.all
#         # @genre_joins = GenreJoin.all
#         render :index
#     end

#     def show
#         @album = Album.find(params[:id])
#         @artist = @album.artist
#         @tracks = Track.where(album_id: @album.id)
#     end

# end
