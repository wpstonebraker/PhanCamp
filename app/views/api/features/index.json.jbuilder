json.artists do
    @artists.each do |artist|
        json.set! artist.artist_name do
            json.extract! artist, :id, :artist_name
        end
    end
end