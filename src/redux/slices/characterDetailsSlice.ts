import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Character,
  CharacterDetailsState,
  CharacterStatus,
} from '../../entities/charactersTypes';

const initialResult = {
  created: '',
  episode: [],
  gender: '',
  id: -1,
  image: '',
  location: {
    name: '',
    url: '',
  },
  name: '',
  origin: {
    name: '',
    url: '',
  },
  species: '',
  status: CharacterStatus.All,
  type: '',
  url: '',
};

export const initialState: CharacterDetailsState = {
  result: initialResult,
  isLoading: false,
  error: '',
};

export const characterDetails = createSlice({
  name: 'characterDetails',
  initialState,
  reducers: {
    getCharacterDetailsTrigger: (state, action: PayloadAction<string>) => {
      state.result = initialResult;
      state.error = '';
    },

    getCharacterDetailsSuccess: (state, action: PayloadAction<Character>) => {
      state.result = action.payload;
      state.error = '';
      state.isLoading = false;
    },

    getCharacterDetailsFailure: (state, action: PayloadAction<Error>) => {
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
  getCharacterDetailsTrigger,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailure,
  setIsLoading,
} = characterDetails.actions;

export default characterDetails.reducer;
