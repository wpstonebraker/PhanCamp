class Api::FeaturesController < ApplicationController

    def index
        @artists = User.where(:artist_name => ['Phish', 'The Grateful Dead', 'Ween', 'Goose'])
    end

end
