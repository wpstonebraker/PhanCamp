import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ArtistAlbum from "./ArtistAlbum";

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

  if (isLoading || artistData?.albums == undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {Object.values(artistData?.albums).map((album) => {
        return <ArtistAlbum album={album} key={album.id} />;
      })}
    </>
  );
}
