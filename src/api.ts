import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

type ServerError = { error: string };

export const mainApi = async (path: string) => {
  const queryUrl = BASE_URL + path;
  try {
    const response = await axios.get(queryUrl);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        throw Error(serverError.response.data.error);
      }
    }
  }
};
