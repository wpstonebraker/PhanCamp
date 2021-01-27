import React from "react";
import DailyItem from "./daily_item";

class DailyIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSellingAlbums();
  }

  render() {
    if (!this.props.albums) return null;

    const items = this.props.albums.map((album) => {
      return <DailyItem album={album} key={album.id} />;
    });
    // debugger;
    const mainItem = items.pop();
    return (
      <div className="di-outer">
        <span className="di-label">PHANCAMP DAILY</span>
        <div className="di-inner">
          <div className="di-box">
            <span id="di-main-item">{mainItem}</span>
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default DailyIndex;
