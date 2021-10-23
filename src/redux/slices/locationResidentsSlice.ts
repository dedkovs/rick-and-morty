import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LocationResidentsState,
  ResidentsApiResponse,
} from '../../entities/charactersTypes';

export const initialState: LocationResidentsState = {
  results: [], /// data
  isLoading: false,
  error: '',
};

export const locationResidents = createSlice({
  name: 'locationResidents',
  initialState,
  reducers: {
    getLocationResidentsTrigger: (state, action: PayloadAction<string>) => {
      state.results = [];
      state.error = '';
      state.isLoading = true;
    },
    getLocationResidentsSuccess: (
      state,
      action: PayloadAction<ResidentsApiResponse>
    ) => {
      state.results = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    getLocationResidentsFailure: (state, action: PayloadAction<Error>) => {
      state.error = action.payload.message;
      state.results = [];
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getLocationResidentsTrigger,
  getLocationResidentsSuccess,
  getLocationResidentsFailure,
  setIsLoading,
} = locationResidents.actions;

export default locationResidents.reducer;
