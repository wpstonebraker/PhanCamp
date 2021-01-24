import React from "react";

const Discog = ({ album }) => {
  return (
    <ul className="discog-tile">
      <li>{album.title}</li>
    </ul>
  );
};

export default Discog;
