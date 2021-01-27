json.albums do
    json.set! @album.id do
        json.extract! @album, :id, :title, :year, :description, :credits, :artist_id
        json.photoUrl url_for(@album.photo)
    end
end

json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.extract! track, :track_name, :track_num
        end
    end
end

json.artist do
    json.set! @artist.id do

        json.extract! @artist, :artist_name, :location, :about, :personal_url, :email, :id
        json.bannerUrl url_for(@artist.banner)
        json.thumbnailUrl url_for(@artist.thumbnail)

    end
end

# json.artist do
#     json.set! @artist.id do
#         json.extract! @artist, :artist_name, :location, :about, :personal_url, :email
#         json.bannerUrl url_for(@artist.banner)
#         json.thumbnailUrl url_for(@artist.thumbnail)
#     end
# end