export const getAlbum = (albumId) => {
  return $.ajax({
    url: `/api/albums/${albumId}`,
  });
};
