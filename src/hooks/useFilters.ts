import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { ApiResponse, Filters } from '../entities/charactersTypes';

export const useFilters = (filters: Filters) =>
  useQuery<ApiResponse, Error>(['filters', filters], fetchApi, {
    retry: 0,
    staleTime: 60 * 1000,
  });

const fetchApi = async (context: QueryFunctionContext) => {
  const [, { name, type, species, gender, status, page }] =
    context.queryKey as [string, Filters];
  const res = await axios.get<ApiResponse>(
    `https://rickandmortyapi.com/api/character/?name=${name}&type=${type}&species=${species}&gender=${gender}&status=${status}&page=${page}`
  );
  return res.data;
};
