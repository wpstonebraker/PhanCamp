json.extract! @track, :track_name, :track_num, :id
if @track.song.attached?
    json.songUrl url_for(@track.song)
else
    json.extract! @track, :songUrl
end