import axios, { AxiosError } from 'axios';

type ServerError = { error: string };

export const fetchApi = async (queryUrl: string) => {
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
