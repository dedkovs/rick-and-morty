import { createSlice } from '@reduxjs/toolkit';
import {
  CharactersState,
  GetFilteredResultsTriggerActionPayload,
  GetFilteredResultsSuccessActionPayload,
  characterStatuses,
} from '../../entities/charactersTypes';

export const initialState: CharactersState = {
  filters: {
    name: '',
    status: characterStatuses.All,
  },
  filteredCharactersFromApi: [],
  pagination: {
    pagesCount: 0,
    pageNumber: 1,
  },
  isLoading: false,
  error: null,
};

export const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getFilteredResultsTrigger: (
      state,
      action: { type: string; payload: GetFilteredResultsTriggerActionPayload }
    ) => {
      state.isLoading = true;
      state.error = null;
      if (action.payload.characterName !== undefined) {
        state.filters.name = action.payload.characterName;
      }
      if (action.payload.status !== undefined) {
        state.filters.status = action.payload.status as characterStatuses;
      }
    },

    getFilteredResultsSuccess: (
      state,
      action: { type: string; payload: GetFilteredResultsSuccessActionPayload }
    ) => {
      state.isLoading = false;
      state.error = null;
      state.filteredCharactersFromApi = action.payload.results;
      state.pagination.pagesCount = action.payload.info.pages;
      state.pagination.pageNumber = action.payload.pageNumber;
    },

    getFilteredResultsFailure: (state, action) => {
      state.isLoading = false;
      state.error = 'Nothing was found';
      state.filteredCharactersFromApi = [];
      state.pagination.pagesCount = 0;
      state.pagination.pageNumber = 1;
    },

    setFilteredCharactersFromApi: (state, action) => {
      state.filteredCharactersFromApi = action.payload;
    },

    setPagesCount: (state, action) => {
      state.pagination.pagesCount = action.payload;
    },
    setCharacterStatus: (state, action) => {
      state.filters.status = action.payload;
    },
  },
});

export const {
  getFilteredResultsTrigger,
  getFilteredResultsSuccess,
  getFilteredResultsFailure,
  setFilteredCharactersFromApi,
  setPagesCount,
  setCharacterStatus,
} = characters.actions;

export default characters.reducer;
