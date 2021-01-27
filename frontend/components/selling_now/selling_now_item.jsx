import React from "react";

const SellingNowItem = ({ album, seconds }) => {
  debugger;
  return (
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
  );
};

export default SellingNowItem;
