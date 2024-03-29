class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
    
        if @user.save
          login(@user)
          render :show
        else
          render json: @user.errors.full_messages, status: 422
        end
    end

    def update
      @user = User.find(params[:id])
      if @user.id == current_user.id && @user.update(user_params)
        render json: 'photo updated'
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
    
    private
    
    def user_params
        params.require(:user).permit(:username, :password, :image)
    end
end
