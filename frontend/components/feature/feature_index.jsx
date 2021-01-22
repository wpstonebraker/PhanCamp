import React from "react";

const FeatureIndex = () => {
  return (
    <div className="fi-container">
      <div className="fi-box">
        <div className="fi-main">
          <img src={window.featurePhish} alt="Main feature Phish" />
        </div>
        <div className="fi-side">
          <img src={window.featureGD} alt="GD feature" />
          <img src={window.featureWeen} alt="Ween feature" />
          <img src={window.featureGoose} alt="Goose feature" />
        </div>
      </div>
    </div>
  );
};

export default FeatureIndex;
