import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "regenerator-runtime/runtime";

const Feature = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch("/api/features");
      const data = response.json();

      return data;
    },
    queryKey: "featuredAlbums",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let phishId;
  let weenId;
  let gdId;
  let gooseId;
  data.features.forEach((artist) => {
    switch (artist.artistName) {
      case "Phish":
        phishId = artist.id;
        break;
      case "Ween":
        weenId = artist.id;
        break;
      case "The Grateful Dead":
        gdId = artist.id;
        break;
      case "Goose":
        gooseId = artist.id;
        break;
      default:
        break;
    }
  });
  // debugger;

  return (
    <div className="fi-container">
      <div className="fi-box">
        <div
          className="fi-main"
          onClick={() => navigate(`/artists/${phishId}`)}
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
            onClick={() => navigate(`/artists/${weenId}`)}
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
            onClick={() => navigate(`/artists/${gdId}`)}
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
            onClick={() => navigate(`/artists/${gooseId}`)}
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
