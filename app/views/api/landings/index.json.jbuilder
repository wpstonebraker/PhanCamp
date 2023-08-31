json.albums do
    json.array! @albums do |album|
        json.extract! album, :id, :title, :year, :description, :artist_id
        json.photoUrl url_for(album.photo)
        json.artist album.artist.artist_name
        json.genreIds album.genre_ids
        json.trackIds album.track_ids
        json.firstTrack album.tracks.first
        # if album.tracks.first.song.attached?
        #     json.firstTrack url_for(album.tracks.first.song)
        # else
        #     json.firstTrack album.tracks.first
        # end
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
