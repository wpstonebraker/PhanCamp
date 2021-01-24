json.albums do
    json.set! @album.id do
        json.extract! @album, :id, :title, :year, :description, :credits
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