import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mSTP = ({ session, entities }, ownProps) => {
  return {
    currentUser: entities.users[session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(Greeting);
