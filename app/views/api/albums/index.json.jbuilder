json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :title
            json.extract! album, :id
        end
    end
end

json.artist do
    json.set! @artist.id do
        json.extract! @artist, :artist_name, :location, :about, :personal_url, :email
    end
end