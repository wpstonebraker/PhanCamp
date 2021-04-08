class Api::SearchController < ApplicationController

    def search
        @artists = User.where("artist_name ILIKE ?", "%#{params[:q]}%").limit(5)
        @tracks = Track.where("track_name ILIKE ?", "%#{params[:q]}%").limit(20)
        @albums = Album.joins(:artist).where("title ILIKE ? OR users.artist_name ILIKE ?", "%#{params[:q]}%", "%#{params[:q]}%").limit(15)
        render :result
    end

end
