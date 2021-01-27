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
  });
};
