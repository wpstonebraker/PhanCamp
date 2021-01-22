import React from "react";
import GreetingContainer from "../greeting/greeting_container";

const BannerBar = () => {
  return (
    <div className="main-header">
      <div className="main-header-top-row">
        <img
          src={require("../../../app/assets/images/logo.png")}
          alt=""
          className="main-header-logo"
        />
        <input className="search-placeholder"></input>
      </div>
      <div className="main-header-bottom-row">
        <p className="main-header-sub-head">
          Discover amazing new music and directly support the artists who make
          it.
        </p>
        <GreetingContainer className="main-greeting" />
      </div>
    </div>
  );
};

export default BannerBar;
