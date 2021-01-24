json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :title, :id
            # if album.photo
            json.photoUrl url_for(album.photo)
            # end
            # json.extract! album, :id
        end
    end
end

json.artist do
    json.set! @artist.id do
        json.extract! @artist, :artist_name, :location, :about, :personal_url, :email
        json.bannerUrl url_for(@artist.banner)
        json.thumbnailUrl url_for(@artist.thumbnail)
    end
end