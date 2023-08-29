import React from "react";
import { useQuery } from "react-query";
import "regenerator-runtime/runtime";

const Feature = () => {
  const { data: artists, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch("/api/features");
      const data = response.json();

      return data;
    },
    queryKey: "albums",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(artists.artists);
  debugger;

  return (
    <div className="fi-container">
      <div className="fi-box">
        <div
          className="fi-main"
          onClick={() => this.props.history.push(`/artists/${phish.id}`)}
        >
          <img src={window.featurePhish} alt="Main feature Phish" />
          <div className="fi-main-box">
            <span>Phish</span>
            <p>1600+ shows</p>
            <p>4000 hours of music</p>
          </div>
        </div>
        <div className="fi-side">
          <div
            className="fis-item-container"
            onClick={() => this.props.history.push(`/artists/${ween.id}`)}
          >
            <img
              src={window.featureWeen}
              alt="Ween feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">Ween</span>
          </div>
          <div
            className="fis-item-container"
            onClick={() => this.props.history.push(`/artists/${theGD.id}`)}
          >
            <img
              src={window.featureGD}
              alt="GD feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">The Grateful Dead</span>
          </div>
          <div
            className="fis-item-container"
            onClick={() => this.props.history.push(`/artists/${goose.id}`)}
          >
            <img
              src={window.featureGoose}
              alt="Goose feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">Goose</span>
          </div>
        </div>
        {/* <div className="fi-side-item-labels">
          <span id="fis-ween">Ween</span>
          <br />
          <span id="fis-gd">The Grateful Dead</span>
          <br />
          <span id="fis-goose">Goose</span>
        </div> */}
      </div>
    </div>
  );
};

export default Feature;
