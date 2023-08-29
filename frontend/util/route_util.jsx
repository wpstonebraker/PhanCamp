import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { withRouter } from "./with_router_util";

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return !loggedIn ? <Component {...props} /> : <Navigate to="/" />;
      }}
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return loggedIn ? <Component {...props} /> : <Navigate to="/login" />;
      }}
    />
  );
};

const mSTP = (state) => {
  return {
    loggedIn: Boolean(state.session.id),
  };
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
