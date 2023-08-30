class Api::SellingController < ApplicationController

    def index
       @albums = Album.order("RANDOM()").sample(8)
    end

end
