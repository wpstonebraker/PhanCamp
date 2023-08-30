class Api::AlbumsController < ApplicationController

    def index
        @artist = User.find(params[:artist_id])
        @albums = Album.where(artist_id: @artist.id)
        @genres = Genre.all
        @tracks = Track.joins(:album).where(albums: { artist_id: params[:artist_id] }) # production
        render :index
    end

    def show
        @album = Album.find(params[:id])
        @artist = @album.artist
        @tracks = Track.where(album_id: @album.id).order(track_num: :asc)

        #@albums = Album.where(artist_id: @artist.id)
        #albumsArr = @albums.pluck(:id)
    end

    def create
        @album = Album.new(album_params)
        @artist = User.find(album_params[:artist_id])
        @genresIds = params["genres"].split(',')
        @tracks = []
        
        if @album.save
            @genresIds.each do |genreId|
                GenreJoin.create!(
                    genre_id: genreId,
                    genreable_id: @album.id,
                    genreable_type: "Album"
                )
            end
            i = 1
            count = params["tracks"]["count"].to_i
            while i <= count do
                
                t = Track.create!(
                    track_name: params["tracks"]["#{i}"].original_filename,
                    track_num: i,
                    album_id: @album.id,
                    song: params["tracks"]["#{i}"]
                )
                @genresIds.each do |genreId|
                    GenreJoin.create!(
                        genre_id: genreId,
                        genreable_id: t.id,
                        genreable_type: "Track"
                    )
                end
                @tracks.push(t)
                i += 1
            end
            render :show

        end
        # if @album.save
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

    def update
        @album = Album.find(params[:id])
        if @album.photo.attached? && params[:album][:photo]
            @album.photo.purge
        end

        if @album.update(album_params)
            render json: @album, status: 200
        else
            render json: @album.errors.full_messages, status: 422
        end 
    end

    def destroy
        @album = Album.find(params[:id])
        @artist = User.find(@album.artist_id)
        
        if @album.destroy
            render :delete
        else
            render json: @album.errors.full_messages, status: 422
        end
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