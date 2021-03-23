class Api::PhishAlbumsController < ApplicationController

    def create
        new_params = phish_album_params.clone
        @artist = User.where(artist_name: "Phish")
        new_params[:artist_id] = @artist.ids[0]

        @album = Album.new(new_params)

        if @album.save
            str = params["tracks"]
            arr = JSON.parse(str)

            arr.each do |track|
                Track.create!(
                    track_name: track["title"],
                    track_num: track["position"],
                    album_id: @album.id,
                ) 
            end

        end


    end


    private
    
    def phish_album_params
        params.require(:album).permit(:title, :artist_id, :year, :price, :description, :credits, :genres, :photo, :show_date)
    end
end