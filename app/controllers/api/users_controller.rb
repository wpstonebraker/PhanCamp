class Api::UsersController < ApplicationController
    def create
        # attempt to create a new User object from the strong params
        @user = User.new(user_params)

        # if we can save the user to the DB, log them in and render their show page
        if @user.save
            login(@user)
            render "api/users/show"
            
        else
            #if not, give them the unprocessable entity response
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :language)
    end
    
end
