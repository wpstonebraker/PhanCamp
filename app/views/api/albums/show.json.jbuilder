json.albums do
    json.extract! @album, :id, :title, :year, :description, :credits, :artist_id, :track_ids
    json.artistName @artist.artist_name
    if @album.show_date
        json.extract! @album, :show_date
    end
    json.photoUrl url_for(@album.photo)
end

json.tracks do
    return {} if @tracks.empty?
    json.array! @tracks, include: :artist do |track|
      json.extract! track, :track_name, :track_num, :album_id, :songUrl
      json.artistName track.artist.artist_name
      if track.song.attached?
        json.songUrl url_for(track.song)
      end
      json.showDate @album.show_date
    end
end

json.artist do
    json.extract! @artist, :id, :artist_name, :location, :about, :personal_url, :email, :genre_ids
    json.albumIds @artist.albums.ids
    if @artist.banner.attached?
        json.bannerUrl url_for(@artist.banner)
    end
    if @artist.thumbnail.attached?
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