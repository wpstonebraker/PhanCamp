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

function Feature({ features }) {
  const navigate = useNavigate();

  const handleClick = (artistId) => {
    navigate(`/artists/${artistId}`);
  };

  const [main, sideTop, sideMid, sideBot] = features;

  return (
    <Container>
      <FeaturesBox>
        <div onClick={() => handleClick(main.id)}>
          <img src={window.featurePhish} alt="Main feature Phish" />
          <div className="fi-main-box">
            <span>main.artistName</span>
            <p>1600+ shows</p>
            <p>4000 hours of music</p>
          </div>
        </div>
        <div className="fi-side">
          <div
            className="fis-item-container"
            onClick={() => handleClick(sideTop.id)}
          >
            <img
              src={window.featureGD}
              alt="GD feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">{sideTop.artistName}</span>
          </div>
          <div
            className="fis-item-container"
            onClick={() => handleClick(sideMid.id)}
          >
            <img
              src={window.featureGoose}
              alt="Goose feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">{sideMid.artistName}</span>
          </div>
          <div
            className="fis-item-container"
            onClick={() => handleClick(sideBot.id)}
          >
            <img
              src={window.featureWeen}
              alt="Ween feature"
              className="fi-side-item"
            />
            <span className="fis-side-item-label">{sideBot.artistName}</span>
          </div>
        </div>
      </FeaturesBox>
    </Container>
  );
}

export default Feature;
