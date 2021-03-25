import React from "react";

const PhishTrackItem = ({ track }) => {
  const playSong = () => {
    document.getElementById("audio-player").src = track.mp3;
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.play();
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
      <td>{track.position}</td>
      <td onClick={() => playSong()}>{track.title}</td>
      {/* <a href={track.mp3} download>
        <td onClick={() => downloadSong()}>Download</td>
        <td>Download</td>
      </a> */}
    </tr>
  );
};

export default PhishTrackItem;
