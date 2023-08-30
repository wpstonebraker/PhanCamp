import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [terms, setTerms] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setTerms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: `/api/search?q=${terms}`,
    }).then((res) => {
      console.log(res);
      setTerms("");
      navigate("/search", { state: res.search });
    });
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          className="search-placeholder"
          onChange={handleInput}
          value={terms}
        ></input>
        <img src={window.searchMag} className="search-icon" alt="Search" />
      </form>
    </div>
  );
}

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       terms: "",
//       results: props.results,
//     };
//     this.handleInput = this.handleInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInput(e) {
//     this.setState({
//       terms: e.target.value,
//     });
//     // this.setState(
//     //   {
//     //     term: e.target.value,
//     //   },
//     //   () => {
//     //     $.ajax({
//     //       url: `/api/search?q=${this.state.term}`,
//     //     }).then((res) => {
//     //       this.setState({ results: res });
//     //     });
//     //   }
//     // );
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.getSearch(this.state.terms).then(() => {
//       this.setState({ terms: "" });
//       this.props.history.push("/search");
//     });
//   }

//   render() {
//     return (
//       <div className="search-box">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             className="search-placeholder"
//             onChange={this.handleInput}
//             value={this.state.terms}
//           ></input>
//           <img src={window.searchMag} className="search-icon" />
//         </form>
//       </div>
//     );
//   }
// }

export default Search;
