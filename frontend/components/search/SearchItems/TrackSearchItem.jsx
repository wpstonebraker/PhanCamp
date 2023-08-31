import React from "react";
import { useNavigate } from "react-router-dom";

function TrackSearchItem({ details }) {
  const navigate = useNavigate();
  const item = details;
  return (
    <div className="display-tile">
      <div
        className="dt-image"
        onClick={() =>
          navigate(`/artists/${item.artistId}/albums/${item.albumId}`)
        }
      >
        <img src={item.photoUrl} />
      </div>
      <div className="dt-details">
        <li className="dt-details-class">TRACK</li>
        <li
          className="dt-details-name"
          onClick={() =>
            navigate(`/artists/${item.artistId}/albums/${item.albumId}`)
          }
        >
          {item.trackName}
        </li>
        <li
          className="dt-details-location pointer"
          onClick={() =>
            navigate(`/artists/${item.artistId}/albums/${item.albumId}`)
          }
        >
          <span
            onClick={() =>
              navigate(`/artists/${item.artistId}/albums/${item.albumId}`)
            }
          >
            from {item.title}
          </span>{" "}
        </li>
        <li className="dt-details-location">
          by
          <span
            className="pointer"
            onClick={() => navigate(`/artists/${item.artistId}`)}
          >
            {` `}
            {item.artistName}
          </span>
        </li>
        {/* <li className="dt-details-website">{item.personalUrl}</li> */}
      </div>
    </div>
  );
}

export default TrackSearchItem;
