import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
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

const Banner = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 975px;
  height: 220px;
`;

const DetailsBox = styled.div`
  display: flex;
`;

const OutletBox = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
`;

export function ArtistLayout() {
  //   const { id: artistId } = useParams();
  const params = useLocation();
  if (!params) return;
  let artistId;
  let albumId;
  const path = params.pathname.split("/");

  artistId = path[2];
  albumId = path[4];

  const { data: artistData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(`/api/artists/${artistId}/albums`);
      return response.json();
    },
    queryKey: `artist${artistId}Data`,
  });

  const bannerImg = artistData?.artist[artistId].bannerUrl;

  if (isLoading || bannerImg == undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Banner src={bannerImg} />
      <Link to={`/artists/${artistId}`}>
        <span>music</span>
      </Link>
      <Link to={`/albums/addPhish`} className={artistId == 25 ? "" : "hidden"}>
        <li className="selected-tab">add show</li>
      </Link>
      <DetailsBox>
        <OutletBox>
          <Outlet />
        </OutletBox>
        <ArtistSidebar artist={artistData.artist[artistId]} />
      </DetailsBox>
    </Container>
  );
}
