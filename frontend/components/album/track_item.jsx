import React from "react";

const TrackItem = ({ track }) => {
  debugger;
  const playSong = () => {
    debugger;
    document.getElementById("audio-player").src = track.songUrl;
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.play();
  };
  return (
    <tr key={track.id}>
      <td>{track.trackNum}</td>
      <td onClick={() => playSong()}>{track.trackName}</td>
      <a href={track.songUrl} download>
        <td>Download</td>
      </a>
    </tr>
  );
};

export default TrackItem;
