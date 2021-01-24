import React from "react";

const ArtistSidebar = ({ artist }) => {
  debugger;

  if (!artist) return null;
  return (
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
      </ul>
    </div>
  );
};

export default ArtistSidebar;
