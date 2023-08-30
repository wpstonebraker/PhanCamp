import React from "react";
import DisplayItem from "./search_display_item_container";

class OldSearchDisplay extends React.Component {
  constructor(props) {
    super(props);
    // if (window.performance) {
    //   if (performance.navigation.type == 1) {
    //     props.history.push("/");
    //   }
    // }
  }

  render() {
    if (Object.keys(this.props.search).length === 0) {
      return (
        <div className="sd-outer">
          <div className="sd-inner">
            <div className="sd-box">
              <div>No Results Found.</div>
            </div>
          </div>
        </div>
      );
    }
    // let searchResults = [];
    // for (const [key, value] of Object.entries(this.props.artists)) {
    //   searchResults.push(<DisplayItem artist={key} details={value} />);
    // }
    // const artistItems = <DisplayItem artists={this.props.artists} />;
    const artistItems =
      Object.keys(this.props.artists).length !== 0
        ? Object.values(this.props.artists).map((res) => {
            return (
              <DisplayItem
                details={res}
                history={this.props.history}
                key={res.id}
              />
            );
          })
        : "";
    const albumItems =
      Object.keys(this.props.albums).length !== 0
        ? Object.values(this.props.albums).map((res) => {
            return (
              <DisplayItem
                details={res}
                history={this.props.history}
                key={res.id}
              />
            );
          })
        : "";
    const trackItems =
      Object.keys(this.props.tracks).length !== 0
        ? Object.values(this.props.tracks).map((res) => {
            return (
              <DisplayItem
                details={res}
                history={this.props.history}
                key={res.id}
              />
            );
          })
        : "";
    return (
      <div className="sd-outer">
        <div className="sd-inner">
          <div className="sd-box">
            <ul>
              {/* {searchResults} */}
              {artistItems}
              {albumItems}
              {trackItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDisplay;
