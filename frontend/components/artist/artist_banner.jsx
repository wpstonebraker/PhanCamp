import React from "react";

const ArtistBanner = ({ artist }) => {
  if (!artist) return null;

  return (
    <div className="artist-banner-box">
      <div className="artist-banner">
        <img src={artist.bannerUrl} className="artist-banner-img" />
      </div>
      <ul className="artist-banner-nav">
        <li className="selected-tab">music</li>
        {/* <li>community</li>
        <li>merch</li> */}
      </ul>
    </div>
  );
};

export default ArtistBanner;
