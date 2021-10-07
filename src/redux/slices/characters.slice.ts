import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './characters.types';

export const initialState: InitialState = {
  characterName: '',
  filteredCharactersFromApi: [],
};

export const characters = createSlice({
  //
  name: 'characters',
  initialState,
  reducers: {
    inputChanged: (state, action) => state,
    setCharacterName: (state, action) => {
      state.characterName = action.payload;
    },
    setFilteredCharactersFromApi: (state, action) => {
      state.filteredCharactersFromApi = action.payload;
    },
  },
});

export const { setCharacterName, setFilteredCharactersFromApi, inputChanged } =
  characters.actions;

export default characters.reducer;
