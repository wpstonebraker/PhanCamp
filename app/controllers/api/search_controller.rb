class Api::SearchController < ApplicationController

    def search
        @artists = User.where("artist_name ILIKE ?", "%#{params[:q]}%")
        @tracks = Track.where("track_name ILIKE ?", "%#{params[:q]}%")
        @albums = Album.joins(:artist).where("title ILIKE ? OR users.artist_name ILIKE ?", "%#{params[:q]}%", "%#{params[:q]}%")
        render :result
    end

end
