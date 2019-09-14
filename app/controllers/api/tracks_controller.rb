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
    end

    def update
    end

    def destroy
    end

    private

    def track_params
        params.require(:track).permit(:title, :description)
    end
end
