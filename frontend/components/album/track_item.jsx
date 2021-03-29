import React from "react";

const TrackItem = React.forwardRef(({ track }, ref) => {
  const playSong = () => {
    const audio = ref.current;
    audio.handleTrack(track.songUrl, track.trackName);
  };

  return (
    <tr key={track.id}>
      <td onClick={() => playSong()}>
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
});
// const TrackItem = ({ track }) => {
//   const playSong = () => {
//     document.getElementById("audio-player").src = track.songUrl;
//     const audioPlayer = document.getElementById("audio-player");
//     audioPlayer.play();
//   };
//   return (
//     <tr key={track.id}>
//       <td>{track.trackNum}</td>
//       <td onClick={() => playSong()}>{track.trackName}</td>
//       <a href={track.songUrl} download>
//         <td>Download</td>
//       </a>
//     </tr>
//   );
// };

export default TrackItem;
