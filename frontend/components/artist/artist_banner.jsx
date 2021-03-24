import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getArtistAlbums } from "../../actions/album_actions";

const ArtistBanner = ({ artist, getArtistAlbums }) => {
  const handleClick = () => {
    getArtistAlbums(artist.id);
  };

  if (!artist) return null;

  debugger;
  return (
    <div className="artist-banner-box">
      <div className="artist-banner">
        <img src={artist.bannerUrl} className="artist-banner-img" />
      </div>
      <ul className="artist-banner-nav">
        <Link to={`/artists/${artist.id}`} onClick={handleClick}>
          <li className="selected-tab">music</li>
        </Link>
        <Link
          to={`/albums/addPhish`}
          className={artist.artistName === "Phish" ? "" : "hidden"}
        >
          <li className="selected-tab">add show</li>
        </Link>
        {/* <li>community</li>
        <li>merch</li> */}
      </ul>
    </div>
  );
};

const mDTP = (dispatch) => {
  return {
    getArtistAlbums: (artistId) => dispatch(getArtistAlbums(artistId)),
  };
};

export default connect(null, mDTP)(ArtistBanner);
