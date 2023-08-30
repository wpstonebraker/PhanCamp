import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #222222;
  height: 540px;
`;

const FeaturesBox = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: auto;
  width: 1400px;
  height: 540px;

  img {
    width: 100%;
    height: 540px;
    grid-column: 1;
    object-fit: cover;
    cursor: pointer;
  }

  .fi-main-box {
    font-size: 30px;
    color: white;
    position: relative;
    bottom: 500px;
    cursor: pointer;
  }
`;

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

  const handleClick = (artistId) => {
    navigate(`/artists/${artistId}`);
  };

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

  return (
    <Container>
      <FeaturesBox>
        <div onClick={() => handleClick(phishId)}>
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
            onClick={() => handleClick(weenId)}
          >
            <img
              src={window.featureWeen}
              alt="Ween feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">Ween</span>
          </div>
          <div className="fis-item-container" onClick={() => handleClick(gdId)}>
            <img
              src={window.featureGD}
              alt="GD feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">The Grateful Dead</span>
          </div>
          <div
            className="fis-item-container"
            onClick={() => handleClick(gooseId)}
          >
            <img
              src={window.featureGoose}
              alt="Goose feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">Goose</span>
          </div>
        </div>
      </FeaturesBox>
    </Container>
  );
};

export default Feature;
