import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from "./dropdown_button";
import Search from "../search/Search";

const BannerBar = (props) => {
  const loggedOut = () => {
    return (
      <div className="main-header-outer">
        <div className="main-header-inner">
          <div className="main-header">
            <div className="main-header-top-row">
              <Link to="/">
                <img src={window.logo} alt="" className="main-header-logo" />
              </Link>
              <Search />
            </div>
            <div className="main-header-bottom-row">
              <p className="main-header-sub-head">
                Discover amazing new music and{" "}
                <span className="gradient">directly support</span> the artists
                who make it.
              </p>
              <GreetingContainer className="main-greeting" />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  };

  const loggedIn = () => {
    return (
      <div className="lin-outer">
        <div className="lin-inner">
          <div className="lin-box">
            <div className="lin-left">
              <Link to="/">
                <img src={window.logo} alt="" className="main-header-logo" />
              </Link>
              <Search />
            </div>
            <div className="lin-right">
              <div className="lin-icon"></div>
              <div className="dropdown-box">
                <DropdownButton currentUser={props.currentUser} />
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
  };
  return props.currentUser ? loggedIn() : loggedOut();
};

export default BannerBar;
