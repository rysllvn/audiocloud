class Api::TracksController < ApplicationController
    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            @tracks = user.tracks
        else
            @tracks = Track.first
        end
    end

    def show
        @track = Track.find(params[:id])
    end

    def create
        track = Track.new(track_params)
        track.user_id = current_user.id
        if track.save
            render json: {message: "yay track added"}
        else
            render json: track.errors.full_messages
        end
    end

    def update
    end

    def destroy
    end

    private

    def track_params
        params.require(:track).permit(:title, :description, :audio)
    end
end
