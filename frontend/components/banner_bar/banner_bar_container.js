import React from "react";
import { connect } from "react-redux";
import BannerBar from "./banner_bar";

const mSTP = ({ session, entities }, ownProps) => {
  return {
    currentUser: entities.users[session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(BannerBar);
