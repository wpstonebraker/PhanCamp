class Api::PhishAlbumsController < ApplicationController

    def create
        new_params = phish_album_params.clone
        @artist = User.where(artist_name: "Phish")[0]
        debugger
        new_params[:artist_id] = @artist.id

        @album = Album.new(new_params)
        @tracks = []

        if @album.save
            str = params["tracks"]
            arr = JSON.parse(str)

            arr.each do |track|
                t = Track.create!(
                    track_name: track["title"],
                    track_num: track["position"],
                    album_id: @album.id,
                )
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