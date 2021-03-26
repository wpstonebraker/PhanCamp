class Api::SearchController < ApplicationController

    def search
        @artists = User.where("artist_name ILIKE ?", "%#{params[:q]}%")
        @tracks = Track.where("track_name ILIKE ?", "%#{params[:q]}%")
        @albums = Album.where("title ILIKE ?", "%#{params[:q]}%")
        render :result
    end

end
