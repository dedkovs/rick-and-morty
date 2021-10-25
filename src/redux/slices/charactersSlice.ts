import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CharactersState,
  CharacterStatus,
  FiltersPayload,
  CharacterSpecies,
  CharacterGender,
} from '../../entities/charactersTypes';

export const initialState: CharactersState = {
  filters: {
    name: '',
    type: '',
    species: CharacterSpecies.All,
    gender: CharacterGender.All,
    status: CharacterStatus.All,
    page: 1,
  },
  selectedCharacterId: null,
};

export const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    resetFilters: (state) => {
      state.filters = {
        name: '',
        type: '',
        species: CharacterSpecies.All,
        gender: CharacterGender.All,
        status: CharacterStatus.All,
        page: 1,
      };
    },
    setFilters: (state, action: PayloadAction<FiltersPayload>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSelectedCharacterId: (state, action: PayloadAction<number>) => {
      state.selectedCharacterId = action.payload;
    },
  },
});

export const { resetFilters, setFilters, setSelectedCharacterId } =
  characters.actions;

export default characters.reducer;
