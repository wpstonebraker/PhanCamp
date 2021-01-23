import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

export const getAlbum = (albumId) => {
  return (dispatch) => {
    return APIUtil.getAlbum(albumId).then((album) => {
      return dispatch(receiveAlbum(album));
    });
  };
};
