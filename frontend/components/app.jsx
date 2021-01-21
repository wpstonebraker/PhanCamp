import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./login/login_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <header className="main-header">
        <div className="main-header-top-row">
          <h1 className="main-header-logo">PhanCamp</h1>
          <input className="search-placeholder"></input>
        </div>
        <div className="main-header-bottom-row">
          <p className="main-header-sub-head">
            Discover amazing new music and directly support the artists who make
            it.
          </p>
          <GreetingContainer className="main-greeting" />
        </div>
      </header>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
