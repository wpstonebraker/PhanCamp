import * as APIUtil from "../util/album_api_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";
export const RECEIVE_SELLING_ALBUMS = "RECEIVE_SELLING_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_PHISH_ALBUM = "RECEIVE_PHISH_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const RECEIVE_DELETED_ALBUM = "RECEIVE_DELETED_ALBUM";

export const receiveAllAlbums = (payload) => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    payload,
  };
};

const receiveDeletedAlbum = (payload) => {
  return {
    type: RECEIVE_DELETED_ALBUM,
    payload,
  };
};

export const receiveAlbum = (payload) => {
  return {
    type: RECEIVE_ALBUM,
    payload,
  };
};

export const receiveArtistAlbums = (albums) => {
  return {
    type: RECEIVE_ARTIST_ALBUMS,
    albums,
  };
};

export const receivePhishAlbum = (payload) => {
  return {
    type: RECEIVE_PHISH_ALBUM,
    payload,
  };
};

export const receiveSellingAlbums = (payload) => {
  return {
    type: RECEIVE_SELLING_ALBUMS,
    payload,
  };
};

export const receiveAlbumErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors,
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
    return APIUtil.getArtistAlbums(artistId).then(
      (albums) => {
        return dispatch(receiveArtistAlbums(albums));
      },
      (errors) => {
        return console.log(errors);
      }
    );
  };
};

export const getPhishAlbum = (date) => {
  return (dispatch) => {
    return APIUtil.getPhishAlbum(date).then((payload) => {
      return dispatch(receivePhishAlbum(payload));
    });
  };
};

export const getPhishShow = (date) => {
  return (dispatch) => {
    return APIUtil.getPhishAlbum(date);
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
    return APIUtil.postAlbum(album).then(
      (album) => {
        return dispatch(receiveAlbum(album));
      },
      (errors) => {
        return dispatch(receiveAlbumErrors(errors));
      }
    );
  };
};

export const postPhishAlbum = (album) => {
  return (dispatch) => {
    // return APIUtil.postPhishAlbum(album).then((album) => {
    //   return dispatch(receivePhishAlbum(album));
    return APIUtil.postPhishAlbum(album);
  };
};

export const deleteAlbum = (id) => {
  return (dispatch) => {
    return APIUtil.deleteAlbum(id).then((id) => {
      return dispatch(receiveDeletedAlbum(id));
    });
  };
};
