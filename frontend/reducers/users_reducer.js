import {
  LOGIN_CURRENT_USER,
  RECEIVE_USER_UPDATE,
} from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case LOGIN_CURRENT_USER:
      newState = Object.assign({}, state, {
        [action.user.id]: action.user,
      });
      return newState;
    case RECEIVE_USER_UPDATE:
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
