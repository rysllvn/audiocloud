class Api::SearchesController < ApplicationController
    def index
        query = params[:query]
        @users = User.where("username ILIKE ?", "%#{query}%").first(5)
        @tracks = Track.where("title ILIKE ?", "%#{query}%").first(5)
        @tracks.each do |track|
            @users << track.user unless @users.include?(track.user)
        end

        render :index
    end

    def show

    end
end
