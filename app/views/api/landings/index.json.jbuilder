json.albums do
    json.array! @albums do |album|
        json.extract! album, :id, :title, :year, :description, :artist_id
        json.photoUrl url_for(album.photo)
        json.artist album.artist.artist_name
        json.genreIds album.genre_ids
        json.trackIds album.track_ids
    end
end

json.genres do
    json.array! @genres do |genre|
        json.extract! genre, :id, :genre
    end
end

json.features do
    json.array! @features do |feature|
        json.extract! feature, :id, :artist_name
    end
end