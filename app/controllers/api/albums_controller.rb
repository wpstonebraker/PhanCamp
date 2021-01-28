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
        newParams = album_params.clone
        @artist = User.where(artist_name: params[:album][:artist_name])
        newParams[:artist_id] = @artist.ids[0]
        newParams.delete(:artist_name)
        @album = Album.new(newParams)
        debugger
        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    private

    def album_params
        params.require(:album).permit(:title, :artist_name, :year, :price, :description, :credits, :genres, :photo)
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
