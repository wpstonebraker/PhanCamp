import React from "react";
import DiscogItem from "./discog_item";

const DiscogIndex = ({ albums, history, artistId }) => {
  debugger;
  return albums.map((album) => {
    return <DiscogItem album={album} history={history} artistId={artistId} />;
  });
};

export default DiscogIndex;
