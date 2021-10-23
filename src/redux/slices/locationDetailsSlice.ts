import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location, LocationDetailsState } from '../../entities/charactersTypes';

const initialResult = {
  created: '',
  dimension: '',
  name: '',
  residents: [],
  type: '',
  url: '',
};

export const initialState: LocationDetailsState = {
  result: initialResult, /// data
  isLoading: false,
  error: '',
};

export const locationDetails = createSlice({
  name: 'locationDetails',
  initialState,
  reducers: {
    getLocationDetailsTrigger: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.result = initialResult;
      state.error = '';
    },

    getLocationDetailsSuccess: (state, action: PayloadAction<Location>) => {
      state.result = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    getLocationDetailsFailure: (state, action: PayloadAction<Error>) => {
      state.error = action.payload.message;
      state.result = initialResult;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getLocationDetailsTrigger,
  getLocationDetailsSuccess,
  getLocationDetailsFailure,
  setIsLoading,
} = locationDetails.actions;

export default locationDetails.reducer;
