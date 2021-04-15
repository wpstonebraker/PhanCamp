import React from "react";
import FeatureIndexContainer from "../feature/feature_index_container";
import SellingNowIndexContainer from "../selling_now/selling_now_index_container";
import DailyIndexContainer from "../daily/daily_index_container";
import DiscoverContainer from "./discover_container";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllAlbums();
  }

  render() {
    if (Object.keys(this.props.albums).length === 0) return null;
    return (
      <div>
        <FeatureIndexContainer />
        <SellingNowIndexContainer
          albums={this.props.albums}
          artists={this.props.artists}
        />
        <DailyIndexContainer />
        <DiscoverContainer />
      </div>
    );
  }
}

export default Splash;
