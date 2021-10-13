import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CharactersState,
  GetDataTriggerPayload,
  ApiResponse,
  CharacterStatuses,
  X,
} from '../../entities/charactersTypes';

export const initialState: CharactersState = {
  filters: {
    name: '',
    status: CharacterStatuses.All,
    page: 1,
  },
  pagination: {
    pagesCount: 0,
  },
  data: [],
  isLoading: false,
  error: null,
};

export const characters = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getDataTrigger: (state, action: PayloadAction<X>) => {
      state.isLoading = true;
      state.error = null;
      state.filters = { ...state.filters, page: 1, ...action.payload };
    },

    getDataSuccess: (state, action: PayloadAction<ApiResponse>) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload.results;
      state.pagination.pagesCount = action.payload.info.pages;
    },

    getDataFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.data = [];
      state.pagination.pagesCount = 0;
      state.filters.page = 1;
    },
  },
});

export const { getDataTrigger, getDataSuccess, getDataFailure } =
  characters.actions;

export default characters.reducer;
