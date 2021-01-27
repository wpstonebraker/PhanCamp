class Api::SellingController < ApplicationController

    # def index
    #     @albums = Album.all
    # end

    def index
       @albums = Album.order("RANDOM()").sample(8)
    # @albums = Album.order_by_rand.all.order_by_rand.sample(8)
       
    #    @albums = Album.order_by_rand.limit(8).all.order_by_rand
    #    @albums = Album.random_by_id_shuffle(Album.all.length).sample(8)
    end

end
