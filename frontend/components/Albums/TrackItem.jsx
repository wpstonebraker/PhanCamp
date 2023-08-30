import React from "react";

// const TrackItem = React.forwardRef(({ track, playTrack }, ref) => {
const TrackItem = ({ track, onPlayTrack }) => {
  const handlePlayClick = () => {
    debugger;
    onPlayTrack(track);
  };
  const playSong = () => {
    // const audio = ref.current;
    // audio.handleTrack(track.songUrl, track.trackName);
    // handleTrack(track);
    playTrack(track);
  };

  if (track === null) return null;
  return (
    <tr key={track.id}>
      <td onClick={handlePlayClick}>
        <img className="track-play" src={window.playIcon} alt="" />
      </td>

      <td className="track-num">{track.trackNum}</td>
      <td className="track-name">{track.trackName}</td>

      <td>
        <a href={track.songUrl} download>
          Download
        </a>
      </td>
    </tr>
  );
};

export default TrackItem;
