json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :year, :description, :artist_id
            json.photoUrl url_for(album.photo)
            json.artist album.artist.artist_name
        end
    end
end