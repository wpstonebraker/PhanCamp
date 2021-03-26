import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";
import genresReducer from "./genres_reducer";

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = action.payload.search;
      return newState;

    default:
      return state;
  }
};

export default searchReducer;
