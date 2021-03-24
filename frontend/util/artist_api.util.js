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

// export const updateProfile = (id, formData) => {
//   return $.ajax({
//     method: "PATCH",
//     url: `/api/users/${id}`,
//     data: formData,
//     contentType: false,
//     processData: false,
//   });
// };
