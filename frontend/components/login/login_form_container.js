import React from "react";
import { connect } from "react-redux";
import { login, receiveSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
  };
};

const mDTP = (dispatch) => {
  const demo = { username: "Guest", password: "misterhiro" };
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    demoLogin: () => dispatch(login(demo)),
  };
};

export default connect(mSTP, mDTP)(LoginForm);
