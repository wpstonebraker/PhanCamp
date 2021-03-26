export const getSearch = (terms) => {
  debugger;
  return $.ajax({
    url: `/api/search?q=${terms}`,
  });
};
