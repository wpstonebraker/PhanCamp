import * as APIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResults = (payload) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    payload,
  };
};

export const getSearch = (terms) => {
  return (dispatch) => {
    return APIUtil.getSearch(terms).then((results) => {
      return dispatch(receiveSearchResults(results));
    });
  };
};
