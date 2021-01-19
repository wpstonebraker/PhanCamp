class ApplicationController < ActionController::Base
    # allow for the helper methods to be used in our views
    helper_method :current_user, :logged_in?

    def current_user
        # return nil if theres no session token
        return nil unless session[:session_token]
        # return the current user, or find the current user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        # BANG BANG
        !!current_user
    end

    def login(user)
        # reset the users session token
        user.reset_session_token
        # set our session token to their session token
        session[:session_token] = user.session_token
        # optimize by setting up the iVar (not essential)
        @current_user = user
    end

    def logout
        #reset users session token
        current_user.reset_session_token
        # reset our session token
        session[:session_token] = nil
        # reset current user
        @current_user = nil
    end

    def ensure_logged_in
        # if theres no current user
        unless current_user
            # let them know they need to be logged in
            render json: { base: ['invalid credentials'] }, status: 401
        end
    end

end
