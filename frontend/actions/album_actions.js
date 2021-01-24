import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";

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
