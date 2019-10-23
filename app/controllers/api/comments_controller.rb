class Api::CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        comment.user_id = current_user.id

        if comment.save
            render json: comment
        else
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        track = comment.track
        id = comment.id

        if current_user.id == comment.user_id && comment.destroy
            render json: id
        else
            render json: comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :track_id)
    end
end