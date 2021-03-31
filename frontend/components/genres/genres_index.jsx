import React from "react";
import { connect } from "react-redux";

const GenresIndex = (props) => {
  const genres = props.genres;
  const artist = props.artist;
  if (!genres) return null;
  return (
    <ul>
      <span>genres</span>
      {artist.genreIds.map((genreId) => {
        return <li key={genreId}>{genres[genreId].genre}</li>;
      })}
    </ul>
  );
};

const mSTP = (state, ownProps) => {
  return {
    genres: state.entities.genres,
  };
};

export default connect(mSTP)(GenresIndex);
