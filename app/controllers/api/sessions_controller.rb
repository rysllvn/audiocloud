class Api::SessionsController < ApplicationController
    def create
        username = params[:user][:username]
        password = params[:user][:password]
        @user = User.find_by_credentials(username,password)
    
        if @user
          login(@user)
          render "api/users/show"
        else
          render json: ["Invalid username or password"], status: 401
        end
    end
    
    def destroy
        @user = current_user
        if @user
          logout!
          render json: {}
        else
          render json: ["Not signed in"], status: 404
        end
    end
end
