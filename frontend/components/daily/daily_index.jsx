import React from "react";
import DailyItem from "./daily_item";
import DailyMainItem from "./daily_main_item";

class DailyIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSellingAlbums();
  }

  render() {
    if (this.props.albums.length === 0) return null;

    debugger;

    const mainItem = this.props.albums.pop();
    const main = <DailyMainItem album={mainItem} key={mainItem.id} />;
    const items = this.props.albums.map((album) => {
      return <DailyItem album={album} key={album.id} />;
    });
    // debugger;
    return (
      <div className="di-outer">
        <span className="di-label">PHANCAMP DAILY</span>
        <div className="di-inner">
          <div className="di-box">
            <span id="di-main-item">{main}</span>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default DailyIndex;
