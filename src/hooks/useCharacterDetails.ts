import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { Character } from '../entities/charactersTypes';

export const useCharacterDetails = (characterId: string) =>
  useQuery<Character, Error>(['characterDetails', characterId], fetchApi, {
    retry: 0,
    staleTime: 60 * 1000,
  });

const fetchApi = async (context: QueryFunctionContext) => {
  const [, characterId] = context.queryKey as [string, string];

  const res = await axios.get<Character>(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );

  return res.data;
};
