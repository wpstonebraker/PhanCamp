class Api::SessionsController < ApplicationController
    def create
        # use our method find by credentials to find the user in the DB
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        # if theres a user, log them in and render their show page
        if @user
            login(@user)
            render "api/users/show"
        # else, render error
        else
            render json: ["Invalid username or password"], status: 401
            # render json: {
            #     username: @user.errors.full_messages_for(:username),
            #     password: @user.errors.full_messages_for(:password)
            # }, status: 401
        end
    end

    def destroy
        # use ApplicationController helper method we created to set @user to current user
        @user = current_user

        # if theres a user logged in, we log them out
        if @user
            logout
            render json: {}
        else
            render json: ["Need to sign in to access"], status: 404
        end
    end
end