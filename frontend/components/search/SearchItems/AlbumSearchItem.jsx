import React from "react";
import { useNavigate } from "react-router-dom";

function AlbumSearchItem({ details }) {
  const navigate = useNavigate();
  const item = details;
  return (
    <div className="display-tile">
      <div
        className="dt-image"
        onClick={() => navigate(`/artists/${item.artistId}/albums/${item.id}`)}
      >
        <img src={item.photoUrl} />
      </div>
      <div className="dt-details">
        <li className="dt-details-class">ALBUM</li>
        <li
          className="dt-details-name pointer"
          onClick={() =>
            navigate(`/artists/${item.artistId}/albums/${item.id}`)
          }
        >
          {item.title}
        </li>
        <li
          className="dt-details-location pointer"
          onClick={() =>
            navigate(`/artists/${item.artistId}/albums/${item.id}`)
          }
        >
          by {item.artistName}
        </li>
        {/* <li className="dt-details-website">{item.personalUrl}</li> */}
      </div>
    </div>
  );
}

export default AlbumSearchItem;
