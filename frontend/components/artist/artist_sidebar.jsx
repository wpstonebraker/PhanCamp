import React from "react";
import GenresIndex from "../genres/genres_index";

const ArtistSidebar = ({ artist }) => {
  debugger;
  if (!artist) return null;
  return (
    <div className="artist-sidebar-inner">
      <div className="artist-sidebar-box">
        <ul>
          <li className="artist-thumbnail-box">
            <img src={artist.thumbnailUrl} className="artist-thumbnail-pic" />
          </li>
          <li className="artist-sidebar-name">{artist.artistName}</li>
          <li className="artist-sidebar-location">{artist.location}</li>
          <li className="artist-sidebar-about">{artist.about}</li>
          <li className="artist-sidebar-website">{artist.personalUrl}</li>
          <li className="artist-sidebar-contact">{artist.email}</li>
          {/* <GenresIndex artist={artist} /> */}
        </ul>
      </div>
    </div>
  );
};

export default ArtistSidebar;
