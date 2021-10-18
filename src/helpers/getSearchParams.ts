export const getSearchParams = (filters: URLSearchParams) => {
  return new URLSearchParams(filters).toString().toLowerCase();
};
