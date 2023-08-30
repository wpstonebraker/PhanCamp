import React from "react";
import { useNavigate } from "react-router-dom";

function ArtistSearchItem({ details }) {
  const navigate = useNavigate();
  const item = details;
  console.log("Artist = ", item);

  return (
    <div className="display-tile">
      <div className="dt-image" onClick={() => navigate(`/artists/${item.id}`)}>
        <img src={item.photoUrl} />
      </div>
      <div className="dt-details">
        <li className="dt-details-class">ARTIST</li>
        <li
          className="dt-details-name pointer"
          onClick={() => navigate(`/artists/${item.id}`)}
        >
          {item.artistName}
        </li>
        <li className="dt-details-location">{item.location}</li>
        <li className="dt-details-website">{item.personalUrl}</li>
      </div>
    </div>
  );
}

export default ArtistSearchItem;
