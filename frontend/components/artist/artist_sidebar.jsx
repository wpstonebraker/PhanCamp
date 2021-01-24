import React from "react";

const ArtistSidebar = ({ artist }) => {
  debugger;

  if (!artist) return null;
  return (
    <div className="artist-sidebar-box">
      <ul>
        <li>{artist.artistName}</li>
        <li>{artist.location}</li>
        <li>{artist.about}</li>
        <li>{artist.peronalUrl}</li>
        <li>{artist.email}</li>
      </ul>
    </div>
  );
};

export default ArtistSidebar;
