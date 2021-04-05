json.tracks do
    json.extract! @track, :id
end

json.albums do
    debugger
    json.set! @album.id do
        json.extract! @album, :id, :title, :year, :description, :credits, :artist_id, :track_ids
        json.artistName @artist.artist_name
        if @album.show_date
            json.extract! @album, :show_date
        end
        json.photoUrl url_for(@album.photo)
    end
end

json.artists do
    json.set! @artist.id do
        json.extract! @artist, :id, :artist_name, :about, :personal_url, :email, :genre_ids, :username
        json.albumIds @artist.albums.ids
        if @artist.thumbnail.attached?
            json.thumbnailUrl url_for(@artist.thumbnail)
        end
        if @artist.banner.attached?
            json.bannerUrl url_for(@artist.banner)
        end
    end
end