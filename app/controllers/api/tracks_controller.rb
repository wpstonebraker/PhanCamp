class Api::TracksController < ApplicationController

    def show
        @track = Track.find(params[:id])
    end

    def update
        @track = Track.find(params["track"]["track_id"].to_i)

        if @track.update(track_params)
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @track = Track.find(params[:id])
        @album = Album.where(id: @track.album_id)[0]
        @artist = User.where(id: @album.artist_id)[0]

        if @track.destroy
            if @album.track_ids.length == 0
                @album.destroy
            end
            render :delete
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    private

    def track_params
        params.require(:track).permit(:track_name, :track_num, :id)
    end
end
