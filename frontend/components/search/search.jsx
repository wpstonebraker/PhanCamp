import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: "",
      results: props.results,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      terms: e.target.value,
    });
    // this.setState(
    //   {
    //     term: e.target.value,
    //   },
    //   () => {
    //     $.ajax({
    //       url: `/api/search?q=${this.state.term}`,
    //     }).then((res) => {
    //       this.setState({ results: res });
    //     });
    //   }
    // );
  }

  handleSubmit() {
    this.props.getSearch(this.state.terms).then(() => {
      this.props.history.push("/search");
    });
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-placeholder"
            onChange={this.handleInput}
          ></input>
          <img src={window.searchMag} className="search-icon" />
        </form>
      </div>
    );
  }
}

export default Search;
