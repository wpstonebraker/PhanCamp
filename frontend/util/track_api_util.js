export const updateTrack = (track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`,
    data: { track },
  });
};

export const deleteTrack = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tracks/${id}`,
  });
};
