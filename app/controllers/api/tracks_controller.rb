class Api::TracksController < ApplicationController
    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            @tracks = user.tracks
            @users = [user]
        else
            @tracks = Track.all.sample(15)
            @users = User.all
        end
    end

    def show
        @track = Track.find(params[:id])
        user_id = @track.user_id
        @comments = @track.comments
        @users = []
        @comments.each do |comment|
            user = comment.user
            @users << user unless @users.include?(user)
        end
        artist = User.find(user_id)
        @users << artist unless @users.include?(artist)
    end

    def create
        track = Track.new(track_params)
        track.user_id = current_user.id
        data = {track: track}

        if track.save
            render json: data
        else
            render json: track.errors.full_messages, status: 422
        end
    end

    def update
    end

    def destroy
        track = Track.find(params[:id])
        id = track.id
        
        if current_user.id == track.user_id && track.destroy
            render json: id
        else
            render json: track.errors.full_messages, status: 422
        end
    end

    private

    def track_params
        params.require(:track).permit(:title, :audio, :image)
    end
end
