export const getAlbum = (albumId) => {
  return $.ajax({
    url: `/api/albums/${albumId}`,
  });
};

// hit feature controller for get all albums, along with featured artists, and util nested arrays
// refactor at some point.
export const getAllAlbums = () => {
  return $.ajax({
    url: `/api/features`,
  });
};

export const getArtistAlbums = (artistId) => {
  return $.ajax({
    url: `/api/artists/${artistId}/albums`,
  });
};

export const getPhishAlbum = (date) => {
  return $.ajax({
    url: `http://phish.in/api/v1/shows/${date}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${window.phishAPIKey}`,
    },
  });
};

export const getSellingAlbums = () => {
  return $.ajax({
    url: "/api/selling",
  });
};

export const postAlbum = (album) => {
  return $.ajax({
    url: "/api/albums",
    method: "POST",
    data: album,
    contentType: false,
    processData: false,
  });
};
