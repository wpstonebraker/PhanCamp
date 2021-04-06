json.artists do
    # @features.each do |artist|
    #     json.set! artist.id do
    #         json.extract! artist, :id, :artist_name
    #     end
    # end
    @artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :username, :artist_name, :about, :personal_url, :email, :genre_ids
            json.albumIds artist.albums.ids
            if artist.thumbnail.attached?
                json.thumbnailUrl url_for(artist.thumbnail)
            end
            if artist.banner.attached?
                json.bannerUrl url_for(artist.banner)
            end
        end
    end
end

json.genres do
    @genres.each do |genre|
        json.set! genre.id do
            json.extract! genre, :genre, :id
        end
    end
end

json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :title, :artist_id, :year, :price, :description, :credits, :id, :track_ids, :genre_ids
            json.photoUrl url_for(album.photo)
        if album.show_date
            json.extract! album, :show_date
        end
        end

    end 
end

json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.extract! track, :track_name, :track_num, :id, :album_id
            if track.song.attached?
                json.songUrl url_for(track.song)
            else
                json.extract! track, :songUrl
            end
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
            