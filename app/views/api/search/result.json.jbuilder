json.search do
    json.array! @artists do |artist|
        json.extract! artist, :artist_name, :location, :about, :personal_url, :email, :id
        if artist.thumbnail.attached?
            json.photoUrl url_for(artist.thumbnail)
        end
        json.class "artist"
    end

    json.array! @albums do |album|
        json.extract! album, :id, :title, :year, :description, :credits, :artist_id
        if album.show_date
            json.extract! album, :show_date
        end
        json.photoUrl url_for(album.photo)
        json.artistName album.artist.artist_name
        json.class "album"
    end

    json.array! @tracks do |track|
        json.extract! track, :track_name, :track_num, :album_id, :id
        if track.song.attached?
            json.songUrl url_for(track.song)
        else
            json.extract! track, :songUrl
        end
        json.artistName track.album.artist.artist_name
        json.artistId track.album.artist.id
        json.title track.album.title
        json.photoUrl url_for(track.album.photo)
        json.class "track"
    end
end