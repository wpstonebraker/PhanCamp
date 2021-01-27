import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const DropdownContent = (props) => {
  return (
    <div className="dropdown-content">
      <ul className="dropdown-content-list">
        <li>{props.currentUser.username}</li>
        <hr className="dropdown-content-list-divider" />
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
