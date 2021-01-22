import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
  };
};

const mDTP = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(LoginForm);