import { RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS } from "../actions/album_actions";
import {
  LOGIN_CURRENT_USER,
  RECEIVE_USER_UPDATE,
} from "../actions/session_actions";
import { RECEIVE_DELETED_TRACK } from "../actions/track_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    // case RECEIVE_ALBUM:
    //   if (Object.values(state).length !== 0) {
    //     newState = Object.assign({}, state, {
    //       [action.payload.artists[Object.keys(state)[0]].id]:
    //         action.payload.artists[Object.keys(state)[0]],
    //     });
    //   } else {
    //     newState = state;
    //   }
    //   return newState;
    case RECEIVE_ALL_ALBUMS:
      if (Object.values(state).length !== 0) {
        newState = Object.assign({}, state, {
          [action.payload.artists[Object.keys(state)[0]].id]:
            action.payload.artists[Object.keys(state)[0]],
        });
      } else {
        newState = state;
      }
      return newState;
    case RECEIVE_DELETED_TRACK:
      if (Object.values(state).length !== 0) {
        newState = Object.assign({}, state, action.payload.artists);
      } else {
        newState = state;
      }
      return newState;
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
