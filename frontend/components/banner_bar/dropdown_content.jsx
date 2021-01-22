import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const DropdownContent = (props) => {
  return (
    <div className="dropdown-content">
      <ul>
        <li>{window.currentUser}</li>
        <li onClick={props.logout}>log out</li>
      </ul>
    </div>
  );
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mDTP)(DropdownContent);
