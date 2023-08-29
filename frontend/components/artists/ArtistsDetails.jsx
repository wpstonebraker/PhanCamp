import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ArtistAlbum from "./ArtistAlbum";
import ArtistSidebar from "../artist/artist_sidebar";

const Container = styled.div`
  width: 975px;
  display: flex;
  margin: auto;
  border: 0.5px solid lightgrey;
  flex-direction: column;
`;

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

  const bannerImg = artistData?.artist[artistId].bannerUrl;

  const Banner = styled.img.attrs((props) => ({
    src: bannerImg,
  }))`
    width: 975px;
    height: 220px;
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
    <Container>
      <Banner />
      <div>
        {albumItems}
        <ArtistSidebar artist={artistData.artist[artistId]} />
      </div>
    </Container>
  );
}
