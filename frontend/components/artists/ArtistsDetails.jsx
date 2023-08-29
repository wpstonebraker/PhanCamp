import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ArtistAlbum from "./ArtistAlbum";
import ArtistSidebar from "../artist/artist_sidebar";
const AlbumBox = styled.div`
  display: flex;
  width: 80%;
`;

export default function ArtistsDetails() {
  const { id: artistId } = useParams();
  const { data: artistData, isLoading } = useQuery({
    queryFn: async () => {
      console.log("query in Artist Details");
      const response = await fetch(`/api/artists/${artistId}/albums`);
      return response.json();
    },
    queryKey: "artistData",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (artistData?.albums == undefined) return;
  const albums = Object.values(artistData?.albums);
  const albumItems = albums.map((album) => {
    return <ArtistAlbum album={album} key={album.id} />;
  });

  return <>{albumItems}</>;
}
