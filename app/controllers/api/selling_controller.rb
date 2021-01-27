class Api::SellingController < ApplicationController

    # def index
    #     @albums = Album.all
    # end

    def index
       @albums = Album.order("RANDOM()").limit(8)
    end

end
