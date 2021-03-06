import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";
export const RECEIVE_SELLING_ALBUMS = "RECEIVE_SELLING_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "GET_ALL_ALBUMS";

export const receiveAllAlbums = (payload) => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    payload,
  };
};

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

export const receiveArtistAlbums = (albums) => {
  return {
    type: RECEIVE_ARTIST_ALBUMS,
    albums,
  };
};

export const receiveSellingAlbums = (payload) => {
  return {
    type: RECEIVE_SELLING_ALBUMS,
    payload,
  };
};

export const getAllAlbums = () => {
  return (dispatch) => {
    return APIUtil.getAllAlbums().then((albums) => {
      return dispatch(receiveAllAlbums(albums));
    });
  };
};

export const getAlbum = (albumId) => {
  return (dispatch) => {
    return APIUtil.getAlbum(albumId).then((album) => {
      return dispatch(receiveAlbum(album));
    });
  };
};

export const getArtistAlbums = (artistId) => {
  return (dispatch) => {
    return APIUtil.getArtistAlbums(artistId).then((albums) => {
      return dispatch(receiveArtistAlbums(albums));
    });
  };
};

export const getSellingAlbums = () => {
  return (dispatch) => {
    return APIUtil.getSellingAlbums().then((albums) => {
      return dispatch(receiveSellingAlbums(albums));
    });
  };
};

export const postAlbum = (album) => {
  return (dispatch) => {
    return APIUtil.postAlbum(album).then((album) => {
      return dispatch(receiveAlbum(album));
    });
  };
};
