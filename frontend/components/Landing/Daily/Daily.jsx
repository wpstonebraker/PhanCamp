import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import DailyMainItem from "../../daily/daily_main_item";
import DailyItem from "../../daily/daily_item";

function Daily({ albums }) {
  const albumsCopy = [...albums];
  const main = prepMain(albumsCopy.pop());
  const topRow = prepTopRow(albumsCopy.pop(), albumsCopy.pop());
  const bottomRow = prepBottomRow(albumsCopy);

  return (
    <div className="di-outer">
      <div className="di-inner">
        <div id="di-label-box">
          <div className="di-label">LATEST RELEASES</div>
        </div>
        <div>
          <div className="di-box">
            <div className="di-box-top-row">
              <span id="di-main-item">{main}</span>
              {topRow}
            </div>
            <div className="di-box-bottom-row">{bottomRow}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daily;

function prepMain(album) {
  return <DailyMainItem album={album} key={album.id} />;
}
function prepTopRow(album1, album2) {
  const topRow = [];
  topRow.push(<DailyItem key={album1.id} album={album1} />);
  topRow.push(<DailyItem key={album2.id} album={album2} />);
  return topRow;
}
function prepBottomRow(albums) {
  const bottomRow = [];
  albums.forEach((album) => {
    bottomRow.push(<DailyItem key={album.id} album={album} />);
  });
  return bottomRow;
}
