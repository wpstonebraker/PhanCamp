import React from "react";
import { Redirect } from "react-router-dom";

const Discog = ({ history, album, getAlbum, artistId }) => {
  const handleClick = () => {
    getAlbum(album.id);
    history.push(`/artists/${artistId}/albums/${album.id}`);
    // <Redirect to={`/album/${album.id}`} />;
  };

  return (
    <ul className="discog-tile">
      <img
        src={album.photoUrl}
        // onClick={() => getAlbum(album.id)}
        // onClick={() => history.push(`/albums/${album.id}`)}
        onClick={() => handleClick()}
        // onClick={() => <Redirect to={`/album/${album.id}`} />}
      />
      <li>{album.title}</li>
    </ul>
  );
};

export default Discog;
