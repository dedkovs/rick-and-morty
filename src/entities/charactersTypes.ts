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
  status: CharacterStatus;
  type: string;
  url: string;
}

export interface Filters {
  name: string;
  type: string;
  species: CharacterSpecies;
  gender: CharacterGender;
  status: CharacterStatus;
  page: number;
}

type AddOptional<T> = {
  [P in keyof T]?: T[P];
};

export type FiltersPayload = AddOptional<Filters> | undefined;

export interface ApiResponse {
  info: CharacterInfo;
  results: Character[];
}

export interface CharactersState {
  filters: Filters;
  selectedCharacterId: number | null;
}

export interface CharacterDetailsState {
  result: Character;
  isLoading: boolean;
  error: string;
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

export enum CharacterStatus {
  All = '',
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export enum CharacterSpecies {
  All = '',
  Alien = 'Alien',
  Animal = 'Animal',
  Cronenberg = 'Cronenberg',
  Disease = 'Disease',
  Human = 'Human',
  Humanoid = 'Humanoid',
  'Mythological Creature' = 'Mythological Creature',
  Planet = 'Planet',
  Poopybutthole = 'Poopybutthole',
  Robot = 'Robot',
  Unknown = 'unknown',
}

export enum CharacterGender {
  All = '',
  Male = 'Male',
  Female = 'Female',
  Genderless = 'Genderless',
  Unknown = 'Unknown',
}

export interface UiState {
  scrollY: number;
}

export interface Location {
  created: string;
  dimension: string;
  id?: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface LocationDetailsState {
  result: Location;
  isLoading: boolean;
  error: string;
}

export interface LocationResidentsState {
  results: Character[];
  isLoading: boolean;
  error: string;
}

export type ResidentsApiResponse = Character[];
