import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ArtistAlbum({ album }) {
  const navigate = useNavigate();
  return (
    <ul className="discog-tile">
      <img
        src={album.photoUrl}
        onClick={() =>
          navigate(`/artists/${album.artistId}/albums/${album.id}`)
        }
      />
      <li>{album.title}</li>
    </ul>
  );
}
