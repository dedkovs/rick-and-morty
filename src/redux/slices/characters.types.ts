// entities

export type CHARACTER_NAME_CHANGED = 'CHARACTER_NAME_CHANGED';

export interface InitialState {
  characterName: string;
  filteredCharactersFromApi: Character[];
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
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

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

export interface CharactersResponseFromApi {
  info: CharacterInfo;
  results: Character[];
}
