import React from "react";
import FeatureIndexContainer from "../feature/feature_index_container";
import SellingNowIndexContainer from "../selling_now/selling_now_index_container";
import DailyIndexContainer from "../daily/daily_index_container";
import DiscoverContainer from "./discover_container";
import FeatureIndex from "../feature/feature_index";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllAlbums();
  }

  render() {
    if (Object.keys(this.props.albums).length === 0) return null;
    const { artists, albums, features } = this.props;
    const featureItems = {
      phish: artists[features[0]],
      theGD: artists[features[1]],
      goose: artists[features[2]],
      ween: artists[features[3]],
    };
    // const phish = artists[features[0]];
    // const theGD = artists[features[1]];
    // const goose = artists[features[2]];
    // const ween = artists[features[3]];
    return (
      <div>
        <FeatureIndex features={featureItems} history={this.props.history} />
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
