import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ArtistAlbum from "./ArtistAlbum";

export default function ArtistsDetails() {
  const { id: artistId } = useParams();
  const { data: artistData, isLoading } = useQuery({
    queryFn: async () => {
      console.log(artistId);
      const response = await fetch(`/api/artists/${artistId}/albums`);
      return response.json();
    },
    queryKey: "artistData",
  });

  console.log(artistData);
  const bannerImg = artistData?.artist[artistId].bannerUrl;

  const Banner = styled.img.attrs((props) => ({
    src: bannerImg,
  }))`
    width: 975;
  `;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const albums = Object.values(artistData?.albums);
  const albumItems = albums.map((album) => {
    return <ArtistAlbum album={album} key={album.id} />;
  });
  // debugger;

  return (
    <div>
      <div>Artists Details for artist {artistId}</div>
      <Banner />
      {albumItems}
    </div>
  );
}
