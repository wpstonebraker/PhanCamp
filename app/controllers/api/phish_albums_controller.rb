class Api::PhishAlbumsController < ApplicationController

    def create
        new_params = phish_album_params.clone
        @artist = User.where(artist_name: "Phish")[0]
        # @genres = @artist.genres
        @genresIds = Genre.ids.sample(4)
        new_params[:artist_id] = @artist.id

        @album = Album.new(new_params)
        @tracks = []

        if @album.save
            str = params["tracks"]
            arr = JSON.parse(str)
            @genresIds.each do |genreId|
                GenreJoin.create!(
                    genre_id: genreId,
                    genreable_id: @album.id,
                    genreable_type: "Album"
                )
            end

            arr.each do |track|
                t = Track.create!(
                    track_name: track["title"],
                    track_num: track["position"],
                    album_id: @album.id,
                )
                @genresIds.each do |genreId|
                    GenreJoin.create!(
                        genre_id: genreId,
                        genreable_id: t.id,
                        genreable_type: "Track"
                    )
                end
                @tracks << t
            end

            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end


    end


    private
    
    def phish_album_params
        params.require(:album).permit(:title, :artist_id, :year, :price, :description, :credits, :genres, :photo, :show_date)
    end
end