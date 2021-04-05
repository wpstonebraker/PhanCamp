import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_EDIT_TRACK = "RECEIVE_EDIT_TRACK";
export const RECEIVE_DELETED_TRACK = "RECEIVE_DELETED_TRACK";

const receiveEditTrack = (payload) => {
  return {
    type: RECEIVE_EDIT_TRACK,
    payload,
  };
};

const receiveDeletedTrack = (payload) => {
  return {
    type: RECEIVE_DELETED_TRACK,
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

export const deleteTrack = (id) => {
  return (dispatch) => {
    return TrackAPIUtil.deleteTrack(id).then((id) => {
      return dispatch(receiveDeletedTrack(id));
    });
  };
};
