import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { Location } from '../entities/charactersTypes';

export const useLocationDetails = (locationId: string) =>
  useQuery<Location, Error>(['locationDetails', locationId], fetchApi, {
    retry: 0,
    staleTime: 60 * 1000,
  });

const fetchApi = async (context: QueryFunctionContext) => {
  const [, locationId] = context.queryKey as [string, string];
  const res = await axios.get<Location>(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  return res.data;
};
