import axios from 'axios';

const CHARACTER_BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchApi = async (fetchParams: {
  pageNumber: number;
  characterName: string;
  status: string;
}) => {
  const { pageNumber, characterName, status } = fetchParams;
  return await axios
    .get(
      `${CHARACTER_BASE_URL}/?page=${pageNumber}&name=${characterName}&status=${status.toLowerCase()}`
    )
    .then((res) => res.data);
};
