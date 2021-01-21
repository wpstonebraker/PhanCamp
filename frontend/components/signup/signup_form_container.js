import React from "react";
import { connect } from "react-redux";
import { createNewUser } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = ({ errors }, ownProps) => {
  debugger;
  return {
    errors: errors.session,
  };
};

const mDTP = (dispatch) => {
  return {
    signup: (user) => dispatch(createNewUser(user)),
  };
};

export default connect(mSTP, mDTP)(SignupForm);
