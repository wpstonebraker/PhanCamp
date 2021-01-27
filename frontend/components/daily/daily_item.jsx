import React from "react";

const DailyItem = ({ album }) => {
  return (
    // <div className="di-item-outer">
    //   <div className="di-item-inner">
    <div className="di-item-box">
      <div className="di-item-tile">
        <img src={album.photoUrl} alt="" />
        <div className="sni-tile-title">{album.title}</div>
        <div className="sni-tile-deets">by {album.artist}</div>
        <br />
        <div className="sni-tile-deets">{album.description}</div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default DailyItem;
