export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: CharacterLocation;
  name: string;
  origin: CharacterOrigin;
  species: string;
  status: characterStatuses;
  type: string;
  url: string;
}

export type CharacterStatus = keyof typeof characterStatuses | 'All';

export interface CharactersState {
  filters: {
    name: string;
    status: characterStatuses;
  };

  filteredCharactersFromApi: Character[];
  pagination: Pagination;
  isLoading: boolean;
  error: string | null;
}

export interface GetFilteredResultsTriggerActionPayload {
  pageNumber?: number;
  characterName?: string;
  status?: characterStatuses;
}

export interface GetFilteredResultsSuccessActionPayload {
  info: CharacterInfo;
  results: Character[];
  pageNumber: number;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface CharacterInfo {
  count: number;
  next: string;
  pages: number;
  prev: string | null;
}
export enum characterStatuses {
  All = 'All',
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export interface CharactersResponseFromApi {
  info: CharacterInfo;
  results: Character[];
}

export interface Pagination {
  pagesCount: number;
  pageNumber: number;
}
