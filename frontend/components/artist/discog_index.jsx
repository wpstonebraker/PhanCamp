import React from "react";
import DiscogItem from "./discog_item";

const DiscogIndex = ({ albums, history, artistId }) => {
  return albums.map((album) => {
    return (
      <DiscogItem
        album={album}
        history={history}
        artistId={artistId}
        key={album.id}
      />
    );
  });
};

export default DiscogIndex;
