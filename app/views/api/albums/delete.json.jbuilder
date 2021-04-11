json.albums do
    json.extract! @album, :id
end

json.artists do
    json.extract! @artist, :id, :album_ids
end