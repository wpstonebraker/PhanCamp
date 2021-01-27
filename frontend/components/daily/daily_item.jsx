import React from "react";
import { Link } from "react-router-dom";

const DailyItem = ({ album, history }) => {
  const handleClick = () => {
    getAlbum(album.id);
    history.push(`/artists/${album.artistId}/albums/${album.id}`);
    // <Redirect to={`/album/${album.id}`} />;
  };
  return (
    <div className="di-item-box" onClick={() => handleClick()}>
      <div className="di-item-tile">
        <img src={album.photoUrl} alt="" />
        <div className="sni-tile-title">{album.title}</div>
        <div className="sni-tile-deets">by {album.artist}</div>
        <br />
        <div className="sni-tile-deets">{album.description}</div>
      </div>
    </div>
  );
};

export default DailyItem;

// <div className="di-item-outer">
//   <div className="di-item-inner">
// <Link to={`/artists/${album.artistId}/albums/${album.id}`}>
// </Link>
{
}
