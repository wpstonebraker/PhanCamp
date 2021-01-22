import React from "react";
import { connect } from "react-redux";
import {
  createNewUser,
  receiveSessionErrors,
} from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSTP = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
  };
};

const mDTP = (dispatch) => {
  return {
    signup: (user) => dispatch(createNewUser(user)),
    clearErrors: (errors) => dispatch(receiveSessionErrors(errors)),
  };
};

export default connect(mSTP, mDTP)(SignupForm);
