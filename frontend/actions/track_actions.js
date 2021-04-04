import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_EDIT_TRACK = "RECEIVE_EDIT_TRACK";

const receiveEditTrack = (payload) => {
  return {
    type: RECEIVE_EDIT_TRACK,
    payload,
  };
};

export const editTrack = (track) => {
  return (dispatch) => {
    return TrackAPIUtil.updateTrack(track).then((track) => {
      return dispatch(receiveEditTrack(track));
    });
  };
};
