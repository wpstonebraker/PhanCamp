import React from "react";
import DailyItem from "./daily_item";
import DailyMainItem from "./daily_main_item";

class DailyIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.getSellingAlbums();
  // }

  render() {
    if (!this.props.daily) return null;
    const mainItem = this.props.albums[this.props.daily.shift()];
    const main = <DailyMainItem album={mainItem} key={mainItem.id} />;
    const items = this.props.daily.map((key, i) => {
      return (
        <DailyItem
          album={this.props.albums[key]}
          // key={album.id}
          history={this.props.history}
        />
      );
    });
    const topRow = items.splice(0, 2);
    return (
      <div className="di-outer">
        <span className="di-label">PHANCAMP DAILY</span>
        <div className="di-inner">
          <div className="di-box">
            <div className="di-box-top-row">
              <span id="di-main-item">{main}</span>
              {topRow}
            </div>
            <div className="di-box-bottom-row">{items}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyIndex;
