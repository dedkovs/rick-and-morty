const BASE_URL = 'https://rickandmortyapi.com/api';
const API_RESOURCE = '/character';

export const getQueryUrl = (filters: URLSearchParams) => {
  let searchParams = new URLSearchParams(filters).toString().toLowerCase();
  const queryUrl = BASE_URL + API_RESOURCE + '/?' + searchParams;
  // console.log(queryUrl);
  return queryUrl;
};

//
