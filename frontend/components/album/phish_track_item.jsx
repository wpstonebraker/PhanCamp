import React from "react";

const PhishTrackItem = React.forwardRef(({ track, playTrack }, ref) => {
  // const playSong = () => {
  //   document.getElementById("audio-player").src = track.mp3;
  //   const audioPlayer = document.getElementById("audio-player");
  //   audioPlayer.play();
  // };
  const playSong = () => {
    // const audio = ref.current;
    // audio.handleTrack(track.mp3, track.title);
    // handleTrack(track);
    playTrack(track);
  };

  // const downloadSong = () => {
  //   const url = window.URL.createObjectURL(new Blob([track.mp3]));
  //   const link = document.createElement("a");
  //   link.href = url;
  //   const trackName = track.show_date + track.title + ".mp3";
  //   link.setAttribute("download", url);
  //   document.body.appendChild(link);
  //   link.click();
  // };
  return (
    <tr key={track.id}>
      <td onClick={() => playSong()}>
        <img className="track-play" src={window.playIcon} alt="" />
      </td>
      <td className="track-num">{track.trackNum}</td>
      <td className="track-name">{track.trackName}</td>
      {/* <a href={track.mp3} download>
        <td onClick={() => downloadSong()}>Download</td>
        <td>Download</td>
      </a> */}
    </tr>
  );
});

export default PhishTrackItem;
