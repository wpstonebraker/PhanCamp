export const getSearch = (terms) => {
  return $.ajax({
    url: `/api/search?q=${terms}`,
  });
};
