import React from "react";
import { Link } from "react-router-dom";

const FeatureIndex = (props) => {
  const handleClick = () => {
    // const benchId = this.props.bench.id;
    // props.history.push(`/artists/${benchId}`);
    props.history.push(`/artists/26`);
  };

  return (
    <div className="fi-container">
      <div className="fi-box">
        <div className="fi-main">
          <img src={window.featurePhish} alt="Main feature Phish" />
          <div className="fi-main-box">
            <span onClick={handleClick}>Phishasdkljfg</span>
            {/* <Link to="/artist/26">PHISH</Link> */}
            Relive Night 13 of Phish's Legendary Madison Square Garden Run
          </div>
        </div>
        <div className="fi-side">
          <img
            src={window.featureGD}
            alt="GD feature"
            className="fi-side-item"
          />
          <img
            src={window.featureWeen}
            alt="Ween feature"
            className="fi-side-item"
          />
          <img
            src={window.featureGoose}
            alt="Goose feature"
            className="fi-side-item"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureIndex;
