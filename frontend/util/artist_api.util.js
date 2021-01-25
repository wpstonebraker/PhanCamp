// export const getArtistAlbums = (artistId) => {
//     return $.ajax({
//       url: `/api/artists/${artistId}/albums`,
//     });
//   };

export const getFeatureArtists = () => {
  return $.ajax({
    url: "/api/features",
  });
};
