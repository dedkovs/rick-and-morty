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
  status: CharacterStatuses;
  type: string;
  url: string;
}

export interface Filters {
  name: string;
  status: CharacterStatuses;
  page: number;
}

export interface Pagination {
  pagesCount: number;
}

export interface ApiResponse {
  info: CharacterInfo;
  results: Character[];
}

export interface CharactersState {
  filters: Filters;
  pagination: Pagination;
  data: Character[];
  isLoading: boolean;
  error: string | null;
}

export interface GetDataTriggerPayload {
  page?: number;
  name?: string;
  status?: CharacterStatuses;
}

export type X = GetDataTriggerPayload | undefined;

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

export enum CharacterStatuses {
  All = '',
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
