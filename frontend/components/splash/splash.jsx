import React from "react";
import FeatureIndexContainer from "../feature/feature_index_container";
import SellingNowIndexContainer from "../selling_now/selling_now_index_container";
import DailyIndexContainer from "../daily/daily_index_container";
import DiscoverContainer from "./discover_container";
import Asdf from "../asdf/asdf";
import Feature from "../feature/feature";

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
        <Feature />
        <FeatureIndexContainer />
        <SellingNowIndexContainer
          albums={this.props.albums}
          artists={this.props.artists}
        />
        <Asdf />
        <DiscoverContainer />
      </div>
    );
  }
}

export default Splash;

// <DailyIndexContainer />
