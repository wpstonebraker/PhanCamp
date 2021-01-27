import React from "react";
import { Link } from "react-router-dom";

const SellingNowItem = ({ album, seconds }) => {
  return (
    <Link to={`/artists/${album.artistId}/albums/${album.id}`}>
      <div className="sni-tile-box">
        <div className="sni-tile">
          <img src={album.photoUrl} alt="" className="sni-tile-photo" />
          <div className="sni-tile-title">{album.title}</div>
          <div className="sni-tile-deets">by {album.artist}</div>
          <div className="sni-tile-deets">
            Sold for ${~~(Math.random() * 10) + 1}
          </div>
          <div className="sni-tile-deets">
            {seconds + Math.round(Math.random())} seconds ago
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SellingNowItem;
