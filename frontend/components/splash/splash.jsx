import React from "react";
import SellingNowIndexContainer from "../selling_now/selling_now_index_container";
import DailyIndexContainer from "../daily/daily_index_container";
import DiscoverContainer from "./DiscoverContainer";
import Asdf from "../asdf/asdf";
import Feature from "../Landing/Feature/Feature";

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
        <SellingNowIndexContainer
          albums={this.props.albums}
          artists={this.props.artists}
        />
        <DiscoverContainer />
      </div>
    );
  }
}

export default Splash;

// <DailyIndexContainer />
