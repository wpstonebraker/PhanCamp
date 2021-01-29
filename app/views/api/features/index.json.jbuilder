json.artists do
    @features.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :artist_name
        end
    end
end

json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :title, :artist_id, :year, :price, :description, :credits, :id
            json.photoUrl url_for(album.photo)
        end
    end 
end

json.util do
    json.features do
        json.array!(@features.ids)
    end
    json.selling do
        json.array!(@selling)
    end
    json.daily do
        json.array!(@daily)
    end

end
            