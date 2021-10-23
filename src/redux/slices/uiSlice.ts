import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiState } from '../../entities/charactersTypes';

export const initialState: UiState = {
  scrollY: 0,
};

export const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollY: (state, action: PayloadAction<number>) => {
      /// redo with refs
      state.scrollY = action.payload;
    },
  },
});

export const { setScrollY } = ui.actions;

export default ui.reducer;
