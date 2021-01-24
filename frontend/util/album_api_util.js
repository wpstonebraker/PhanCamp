export const getAlbum = (albumId) => {
  return $.ajax({
    url: `/api/albums/${albumId}`,
  });
};

export const getArtistAlbums = (artistId) => {
  return $.ajax({
    url: `/api/artists/${artistId}/albums`,
  });
};
