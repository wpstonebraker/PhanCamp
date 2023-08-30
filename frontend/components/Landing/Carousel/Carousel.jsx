import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SellingNowItem from "../../selling_now/selling_now_item";
import { useNavigate } from "react-router-dom";

function Carousel(props) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const { data: albumsData, isLoading } = useQuery({
    queryFn: async () => {
      console.log("fetching in react query");
      const response = await fetch("/api/selling");
      const data = await response.json();
      return data;
    },
    queryKey: "carousel",
  });

  useEffect(() => {
    // if data hasn't fetched, return
    // we add it to dependency array so if isLoading changes, it'll run again
    if (isLoading) {
      return;
    }

    // call add to carousel semi randomly
    const loop = () => {
      const rand = ~~(Math.random() * 5000) + 500;
      setTimeout(() => {
        addToCarousel();
        loop();
      }, rand);
    };

    const initCarousel = () => {
      if (albumsData.length === 0) {
        return;
      }

      // push random array elements into array
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

      // set state
      setItems(initialItems);
    };

    const addToCarousel = () => {
      if (albumsData.length === 0) {
        return;
      }

      const max = albumsData.length;
      const albums = albumsData;
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const rand = ~~(Math.random() * max);
        const album = albums[rand];
        newItems.unshift({
          key: `selling-${album.id + Math.random()}`,
          album,
          artist: album.artist,
          seconds: rand,
        });

        newItems.pop();
        return newItems;
      });
    };

    initCarousel();
    loop();
    return () => {
      setItems([]);
    };
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
