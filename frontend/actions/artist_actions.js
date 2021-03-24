import * as APIUtil from "../util/artist_api.util";

export const RECEIVE_FEATURE_ARTISTS = "RECEIVE_FEATURE_ARTISTS";

const receiveFeatureArtist = (payload) => {
  return {
    type: RECEIVE_FEATURE_ARTISTS,
    payload,
  };
};

export const getFeatureArtists = () => {
  return (dispatch) => {
    return APIUtil.getFeatureArtists().then((artists) => {
      return dispatch(receiveFeatureArtist(artists));
    });
  };
};

// export const updateProfile = (id, profile) => {
//   return (dispatch) => {
//     return APIUtil.updateProfile(id, profile);
//   };
// };
