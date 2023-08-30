import React from "react";
import { Link } from "react-router-dom";

const DailyItem = ({ album }) => {
  return (
    <Link to={`/artists/${album.artistId}/albums/${album.id}`}>
      <div className="di-item-box">
        <div className="di-item-tile">
          <img src={album.photoUrl} alt="" />
          <div className="di-tile-title">{album.title}</div>
          <div className="di-tile-artist">by {album.artist}</div>
          <br />
          <div className="di-tile-deets">{album.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default DailyItem;

// <div className="di-item-outer">
//   <div className="di-item-inner">
// <Link to={`/artists/${album.artistId}/albums/${album.id}`}>
// </Link>
{
}
