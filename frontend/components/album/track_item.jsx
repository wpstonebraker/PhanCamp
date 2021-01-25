import React from "react";

const TrackItem = ({ track }) => {
  return (
    <tr key={track.id}>
      <td>{track.trackNum}</td>
      <td>{track.trackName}</td>
    </tr>
  );
};

export default TrackItem;
