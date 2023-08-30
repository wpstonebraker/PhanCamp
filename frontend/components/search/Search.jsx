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

export default Search;
