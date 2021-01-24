import React from "react";

const Discog = ({ album }) => {
  return (
    <ul className="discog-tile">
      <img src={album.photoUrl} />
      <li>{album.title}</li>
    </ul>
  );
};

export default Discog;
