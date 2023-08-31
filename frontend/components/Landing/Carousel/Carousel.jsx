import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SellingNowItem from "../../selling_now/selling_now_item";
import useRandomInterval from "../../../util/hooks/useRandomInterval";

function Carousel() {
  const [items, setItems] = useState([]);

  const { data: albumsData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch("/api/selling");
      const data = await response.json();
      return data;
    },
    queryKey: "carousel",
  });

  const addToCarousel = () => {
    setItems((prevItems) => {
      return updateItems(prevItems, albumsData);
    });
  };

  useRandomInterval(addToCarousel, 1000, 3000);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setItems(initCarousel(albumsData));
  }, [isLoading, albumsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="factoid-outer">
        <div className="factoid-inner">
          <div className="factoid">
            Phans have streamed <span>6 million hours</span> of music using
            Phancamp,
            <br />
            and paid <span>$1.2 million</span> in the last week alone.
          </div>
        </div>
      </div>
      <div className="sn-idx-box-container">
        <span className="sn-idx-box-label">SELLING RIGHT NOW</span>
        <div className="sn-idx-box">
          {items.map((item) => (
            <SellingNowItem
              key={item.key}
              album={item.album}
              artist={item.artist}
              seconds={item.seconds}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

const initCarousel = (albumsData) => {
  const max = albumsData.length;
  const albums = albumsData;
  let initialItems = [];
  for (let i = 0; i < 8; i++) {
    const rand = ~~(Math.random() * max);
    const album = albums[rand];
    initialItems.push({
      key: `selling-${album.id + Math.random()}`,
      album,
      artist: album.artist,
      seconds: rand,
    });
  }
  return initialItems;
};

const updateItems = (previousState, albums) => {
  const newItems = [...previousState];
  const rand = ~~(Math.random() * albums.length);
  const album = albums[rand];
  newItems.unshift({
    key: `selling-${album.id + Math.random()}`,
    album,
    artist: album.artist,
    seconds: rand,
  });

  newItems.pop();
  return newItems;
};
