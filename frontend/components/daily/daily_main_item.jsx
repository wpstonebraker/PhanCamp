import React from "react";
import { Link } from "react-router-dom";

const DailyMainItem = ({ album, history }) => {
  debugger;
  return (
    <Link to={`/artists/${album.artistId}/albums/${album.id}`}>
      <div className="di-main-box">
        <div className="di-main-tile">
          <img src={album.photoUrl} alt="" />
          <div className="di-main-details">
            <div className="di-main-title">{album.title}</div>
            <div className="di-main-artist">by {album.artist}</div>
            <br />
            <div className="di-main-deets">{album.description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DailyMainItem;
