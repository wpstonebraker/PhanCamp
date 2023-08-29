import React from "react";
import { Link, NavLink } from "react-router-dom";
import DropdownButton from "../banner_bar/dropdown_button";

const Greeting = ({ currentUser, logout }) => {
  // class Greeting extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  //   render() {
  //     ;
  //     const loggedIn = (
  //       <div className="greeting-div">
  //         <button className="greeting-logout" onClick={() => this.props.logout}>
  //           Log Out
  //         </button>
  //       </div>
  //     );
  //     const loggedOut = (
  //       <nav className="login-signup">
  //         <Link to="/login">Login</Link>
  //         &nbsp;or&nbsp;
  //         <Link to="/signup">Sign Up!</Link>
  //       </nav>
  //     );
  //     return this.props.currentUser ? loggedIn : loggedOut;
  //   }
  // }
  const loggedIn = () => {
    return (
      <div className="greeting-div">
        {/* <DropdownButton /> */}
        <button className="greeting-logout" onClick={logout}>
          Log Out
        </button>
      </div>
    );
  };
  const loggedOut = () => {
    return (
      <nav className="login-signup">
        <NavLink to="/login" className="greeting-login">
          login
        </NavLink>
        &nbsp; &nbsp;
        <NavLink to="/signup" className="greeting-signup">
          sign up
        </NavLink>
      </nav>
    );
  };

  // user a ternary to render the correct content given the context

  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;
