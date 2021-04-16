json.albums do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :year, :description, :credits, :artist_id, :track_ids
            if album.show_date
                json.extract! album, :show_date
            end
            json.artistName @artist.artist_name
            json.photoUrl url_for(album.photo)
        end
    end
end

json.artist do
    json.set! @artist.id do
        json.extract! @artist, :id, :username, :artist_name, :about, :personal_url, :email, :genre_ids, :location
        # json.extract! @artist, :artist_name, :location, :about, :personal_url, :email, :id, :genre_ids
        json.albumIds @artist.albums.ids
        if @artist.banner.attached?
            json.bannerUrl url_for(@artist.banner)
        end
        if @artist.thumbnail.attached?
            json.thumbnailUrl url_for(@artist.thumbnail)
        end
        # json.bannerUrl url_for(@artist.banner)
        # json.thumbnailUrl url_for(@artist.thumbnail)
    end
end

json.genres do
    @genres.each do |genre|
        json.set! genre.id do
            json.extract! genre, :id, :genre
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
# json.albums do
#     @albums.each do |album|
#         json.set! album.id do
#             json.extract! album, :title, :id
#             json.photoUrl url_for(album.photo)
#         end
#     end
# end

# json.artist do
#     json.set! @artist.id do
#         json.extract! @artist, :artist_name, :location, :about, :personal_url, :email #, :genre_ids
#         json.bannerUrl url_for(@artist.banner)
#         json.thumbnailUrl url_for(@artist.thumbnail)
#     end
# end

# json.genres do
#     @genres.each do |genre|
#         json.set! genre.id do
#             json.extract! genre, :id, :genre
#         end
#     end
# end



# json.genres do
#     @artist.genre_ids.each do |genre_id|
#         
#         json.set! genre_id do
#             @genre_joins.each do |genre_join|
#                 
#                 json.extract! genre_join, :genre_id
#             end
#             # json.extract! @genre_joins., :genre_id
#         end
#     end
# end