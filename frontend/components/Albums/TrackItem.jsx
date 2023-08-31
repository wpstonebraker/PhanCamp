import React from "react";

const TrackItem = ({ track, onPlayTrack }) => {
  const handlePlayClick = () => {
    onPlayTrack(track);
  };

  console.log(track);
  return (
    <tr key={track.id}>
      <td onClick={handlePlayClick}>
        <img className="track-play" src={window.playIcon} alt="" />
      </td>

      <td className="track-num">{track.trackNum}</td>
      <td className="track-name">{track.trackName}</td>

      {!track.showDate && (
        <td>
          <a href={track.songUrl} download>
            Download
          </a>
        </td>
      )}
    </tr>
  );
};

export default TrackItem;
