import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { ResidentsApiResponse } from '../entities/charactersTypes';

export const useLocationResidents = (characterIds: string) =>
  useQuery<ResidentsApiResponse, Error>(
    ['characterDetails', characterIds],
    fetchApi,
    {
      retry: 0,
      staleTime: 60 * 1000,
    }
  );

const fetchApi = async (context: QueryFunctionContext) => {
  const [, characterIds] = context.queryKey as [string, string];
  const res = await axios.get<ResidentsApiResponse>(
    `https://rickandmortyapi.com/api/character/${characterIds}`
  );
  return res.data;
};
