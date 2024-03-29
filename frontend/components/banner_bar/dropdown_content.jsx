import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import { withRouter } from "../../util/with_router_util";

const DropdownContent = (props) => {
  return (
    <div className="dropdown-content">
      <ul className="dropdown-content-list">
        <li>{props.currentUser.username}</li>
        {/* <Link to={`/album/create`}> */}
        {/* <li> */}
        <li onClick={() => props.history.push(`/albums/create`)}>
          + add album
        </li>
        <li
          onClick={() => props.history.push(`/artists/${props.currentUser.id}`)}
        >
          view albums
        </li>
        <li onClick={() => props.history.push(`/edit-profile`)}>
          edit profile
        </li>
        {/* </li> */}
        {/* </Link> */}
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

export default connect(null, mDTP)(withRouter(DropdownContent));

// export default DropdownContent;
