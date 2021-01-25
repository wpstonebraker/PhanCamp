import React from "react";
import { connect } from "react-redux";

const GenresIndex = ({ genres }) => {
  if (!genres) return null;
  return (
    <ul>
      <span>genres</span>
      {genres.map((genre) => {
        return <li key={genre.id}>{genre.genre}</li>;
      })}
    </ul>
  );
};

const mSTP = ({ entities: { genres } }, ownProps) => {
  return {
    genres: Object.values(genres),
  };
};

export default connect(mSTP)(GenresIndex);
