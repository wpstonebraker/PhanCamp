json.search do
    json.artists do
        @artists.each do |artist|
            json.set! artist.id do
                json.extract! artist, :artist_name, :location, :about, :personal_url, :email, :id
                if artist.banner.attached?
                    json.bannerUrl url_for(artist.banner)
                end
                if artist.thumbnail.attached?
                    json.thumbnailUrl url_for(artist.thumbnail)
                end
                json.class "user"
            end
        end
    end

    json.tracks do
        @tracks.each do |track|
            json.set! track.id do
                json.extract! track, :track_name, :track_num, :album_id, :id
                if track.song.attached?
                    json.songUrl url_for(track.song)
                else
                    json.extract! track, :songUrl
                end
                json.class "track"
            end
        end
    end
    json.albums do
        @albums.each do |album|
            json.set! album.id do
                json.extract! album, :id, :title, :year, :description, :credits, :artist_id
                if album.show_date
                    json.extract! album, :show_date
                end
                json.photoUrl url_for(album.photo)
                json.class "album"
            end
        end
    end
end