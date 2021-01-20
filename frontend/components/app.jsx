import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./signup/signup_form_container";

const App = () => {
  return (
    <div>
      <h1>PhanCamp</h1>
      <GreetingContainer />
      <SignupFormContainer />
    </div>
  );
};

export default App;
