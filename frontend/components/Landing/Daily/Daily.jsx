import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import DailyMainItem from "../../daily/daily_main_item";
import DailyItem from "../../daily/daily_item";

function Daily({ albums }) {
  let main;
  const items = [];
  for (let i = 0; i < 8; i++) {
    const album = albums[i];
    if (i === 0) {
      main = <DailyMainItem album={album} key={album.id} />;
    } else {
      items.push(<DailyItem key={album.id} album={album} />);
    }
  }

  const topRow = items.splice(0, 2);

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
            <div className="di-box-bottom-row">{items}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daily;
