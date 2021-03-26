json.search do
    @artists.each do |artist|
        json.set! artist.artist_name do
            json.extract! artist, :artist_name, :location, :about, :personal_url, :email, :id
            json.bannerUrl url_for(artist.banner)
            json.thumbnailUrl url_for(artist.thumbnail)
        end
    end
    @tracks.each do |track|
        json.set! track.track_name do
            json.extract! track, :track_name, :track_num, :album_id
            if track.song.attached?
                json.songUrl url_for(track.song)
            else
                json.extract! track, :songUrl
            end
        end
    end
    @albums.each do |album|
        json.set! album.title do
            json.extract! album, :id, :title, :year, :description, :credits, :artist_id
            if album.show_date
                json.extract! album, :show_date
            end
            json.photoUrl url_for(album.photo)
        end
    end
end