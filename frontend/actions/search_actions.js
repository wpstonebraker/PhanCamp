import * as APIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResults = (payload) => {
  debugger;
  return {
    type: RECEIVE_SEARCH_RESULTS,
    payload,
  };
};

export const getSearch = (terms) => {
  debugger;
  return (dispatch) => {
    debugger;
    return APIUtil.getSearch(terms).then((results) => {
      debugger;
      return dispatch(receiveSearchResults(results));
    });
  };
};
