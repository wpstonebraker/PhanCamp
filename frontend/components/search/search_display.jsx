import React from "react";

class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const resultItems = Object.keys(this.props.results).map((res) => {
      return <li>{res}</li>;
    });
    debugger;
    return (
      <div>
        <ul>{resultItems}</ul>
      </div>
    );
  }
}

export default SearchDisplay;
