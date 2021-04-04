export const updateTrack = (track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`,
    data: { track },
  });
};
