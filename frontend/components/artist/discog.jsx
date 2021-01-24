import React from "react";

const Discog = ({ history, album, getAlbum }) => {
  return (
    <ul className="discog-tile">
      <img
        src={album.photoUrl}
        onClick={() => getAlbum(album.id)}
        onClick={() => history.push(`/albums/${album.id}`)}
      />
      <li>{album.title}</li>
    </ul>
  );
};

export default Discog;
