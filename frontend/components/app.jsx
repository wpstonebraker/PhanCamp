import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./login/login_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import BannerBarContainer from "./banner_bar/banner_bar_container";

const App = () => {
  return (
    <div>
      {/* <header className="main-header"> */}
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <BannerBarContainer />
      </Switch>
    </div>
  );
};

export default App;
