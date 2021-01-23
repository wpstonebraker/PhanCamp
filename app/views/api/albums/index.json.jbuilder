json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :title
        end
    end
end