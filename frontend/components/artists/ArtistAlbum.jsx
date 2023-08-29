import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

export default function ArtistAlbum({ album }) {
  const navigate = useNavigate();
  debugger;
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
