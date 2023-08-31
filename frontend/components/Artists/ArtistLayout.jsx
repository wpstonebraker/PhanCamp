import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import ArtistSidebar from "./ArtistSidebar";
import { Container, Banner, Tabs, DetailsBox, OutletBox } from "./ArtistStyles";

export function ArtistLayout() {
  const params = useLocation();
  const artistId = params.pathname.split("/")[2];

  const { data: artistData, isLoading } = useQuery({
    queryFn: async () => {
      console.log("query in artist layout");
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
      <Tabs>
        <Link to={`/artists/${artistId}`}>
          <span>music</span>
        </Link>
        <Link
          to={`/albums/addPhish`}
          className={artistId == 25 ? "" : "hidden"}
        >
          <span className="selected-tab">add show</span>
        </Link>
      </Tabs>
      <DetailsBox>
        <OutletBox>
          <Outlet />
        </OutletBox>
        <ArtistSidebar artist={artistData.artist[artistId]} />
      </DetailsBox>
    </Container>
  );
}
