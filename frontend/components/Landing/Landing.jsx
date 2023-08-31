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

  // let carouselAlbums = randomAlbums(albums, 8);
  // function randomAlbums(albums, amount) {
  //   const items = [];
  //   for (let i = 0; i < amount; i++) {
  //     const rand = ~~(Math.random() * albums.length);
  //     const album = albums[rand];
  //     items.push(album);
  //   }
  //   return items;
  // }

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
