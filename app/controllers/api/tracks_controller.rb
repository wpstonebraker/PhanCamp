class Api::TracksController < ApplicationController

    def update
        debugger
        @track = Track.find(params["track"]["track_id"].to_i)

        if @track.update(track_params)
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
        
    end

    private

    def track_params
        params.require(:track).permit(:track_name, :track_num, :id)
    end
end
