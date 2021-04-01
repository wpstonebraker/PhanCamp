export const PLAY_TRACK = "PLAY_TRACK";
export const PLAY_PHISH_TRACK = "PLAY_PHISH_TRACK";

export const playTrack = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: PLAY_TRACK,
      payload,
    });
  };
};

export const playPhishTrack = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: PLAY_PHISH_TRACK,
      payload,
    });
  };
};
