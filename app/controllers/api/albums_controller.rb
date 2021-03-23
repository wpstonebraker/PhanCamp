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

        #@albums = Album.where(artist_id: @artist.id)
        #albumsArr = @albums.pluck(:id)
    end

    def create
        debugger
        @album = Album.new(album_params)
        @artist = User.find(album_params[:artist_id])
        debugger
        @tracks = []
        
        if @album.save
            i = 1
            count = params["tracks"]["count"].to_i
            while i <= count do
                
                t = Track.create!(
                    track_name: params["tracks"]["#{i}"].original_filename,
                    track_num: i,
                    album_id: @album.id,
                    song: params["tracks"]["#{i}"]
                )
                @tracks.push(t)
                i += 1
            end
            render :show

        end
        # if @album.save
        #     debugger
        #     i = 1
        #     count = params["tracks"]["count"]
        #     while i <= j
        #         t = Track.create!(
        #             track_name: params["tracks"][i].original_filename,
        #             track_num: i,
        #             album_id: @album.id,
        #             song: params["tracks"]
        #         )
        #         @tracks.push(t)
        #         i++
        #     end
        #     # @track.song.attach(io: URI.open(@track), filename: "#{@track.name}.mp3")
        #     render :show
        # # else
        # #     render json: @album.errors.full_messages, status: 422
        # end
    end
    
    private
    
    def album_params
        params.require(:album).permit(:title, :artist_id, :year, :price, :description, :credits, :genres, :photo)
        # params.require(:album).permit(:title, :artist_id, :year, :price, :description, :credits, :genres, :photo, tracksArray: [])
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

# newParams = album_params.clone
# @artist = User.where(artist_name: params[:album][:artist_name])
# newParams[:artist_id] = @artist.ids[0]
# newParams.delete(:artist_name)
# @album = Album.new(newParams)
# if @album.save
#     render :show
# else
#     render json: @album.errors.full_messages, status: 422
# end
# params["tracks"]["tracksArray"].each do |track, i|
#     t = Track.create!(
    #         track_name: track.name,
    #         track_num: (i + 1),
    #         album_id: @album.id
    #     )
    #     t.song.attach(io: URI.open(track), filename: "#{track.name}.mp3")
    # end