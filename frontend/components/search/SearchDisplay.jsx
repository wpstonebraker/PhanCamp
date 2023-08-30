import React from "react";
import { useLocation } from "react-router-dom";
import DisplayItem from "./search_display_item";

function SearchDisplay() {
  const { state } = useLocation();
  debugger;
  if (state == undefined) {
    return <div>No Results Found.</div>;
  }
  //   const artistItems = state.artists?.map((res) => {
  //     return <DisplayItem details={res} key={res.id} />;
  //   });
  //   const albumItems = state.albums?.map((res) => {
  //     return <DisplayItem details={res} key={res.id} />;
  //   });
  const trackItems = state.map((res) => {
    console.log(res);
    return <DisplayItem details={res} key={`${res.class}${res.id}`} />;
  });
  return (
    <div className="sd-outer">
      <div className="sd-inner">
        <div className="sd-box">
          <ul>
            {/* {searchResults} */}
            {/* {artistItems}
            {albumItems} */}
            {trackItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchDisplay;
