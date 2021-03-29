import React from "react";
import DisplayItem from "./search_display_item";

class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    // let searchResults = [];
    // for (const [key, value] of Object.entries(this.props.artists)) {
    //   searchResults.push(<DisplayItem artist={key} details={value} />);
    // }
    // const artistItems = <DisplayItem artists={this.props.artists} />;
    const artistItems =
      Object.keys(this.props.artists).length !== 0
        ? Object.values(this.props.artists).map((res) => {
            debugger;
            return <DisplayItem details={res} />;
          })
        : "";
    const albumItems =
      Object.keys(this.props.albums).length !== 0
        ? Object.values(this.props.albums).map((res) => {
            return <DisplayItem details={res} />;
          })
        : "";
    // const trackItems =
    //   Object.keys(this.props.tracks).length !== 0
    //     ? Object.keys(this.props.tracks).map((res) => {
    //         return <li>{res}</li>;
    //       })
    //     : "";
    debugger;
    return (
      <div>
        <ul>
          {/* {searchResults} */}
          {artistItems}
          {albumItems}
          {/* {trackItems} */}
        </ul>
      </div>
    );
  }
}

export default SearchDisplay;
