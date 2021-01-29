import { RECEIVE_ALL_ALBUMS } from "../actions/album_actions";

const utilReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, state, action.payload.util);
    default:
      return state;
  }
};

export default utilReducer;
