import React from "react";
import Feature from "./Feature/Feature";
import Carousel from "./Carousel/Carousel";
import Daily from "./Daily/Daily";
import Discover from "./Discover/Discover";
import { useQuery } from "react-query";
import Foots from "./Footer/Foots";

export default function Landing() {
  const { data: landingData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch("/api/landings");
      const data = response.json();

      return data;
    },
    queryKey: "landing",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const albums = landingData.albums;
  const genres = landingData.genres;
  const features = landingData.features;
  const dailyAlbums = albums.slice(0, 8);

  return (
    <>
      <Feature features={features} />
      <Carousel />
      <Daily albums={dailyAlbums} />
      <Discover albums={albums} genres={genres} />
      <Foots />
    </>
  );
}
