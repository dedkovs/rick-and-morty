import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CharactersState,
  ApiResponse,
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
  data: {
    totalResultsCount: 0,
    results: [],
    pagesCount: 0,
  },
  isLoading: false,
  error: '',
};

export const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getDataTrigger: (state, action: PayloadAction<FiltersPayload>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.data.totalResultsCount = 0;
      state.error = '';
      state.isLoading = true;
    },

    getDataSuccess: (state, action: PayloadAction<ApiResponse>) => {
      state.isLoading = false;
      state.data.totalResultsCount = action.payload.info.count;
      state.error = '';
      state.data.results = action.payload.results;
      state.data.pagesCount = action.payload.info.pages;
    },

    getDataFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.data.totalResultsCount = 0;
      state.error = action.payload.message;
      state.data.results = [];
      state.data.pagesCount = 0;
      state.filters.page = 1;
    },

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
  },
});

export const { getDataTrigger, getDataSuccess, getDataFailure, resetFilters } =
  characters.actions;

export default characters.reducer;
