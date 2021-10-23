import { combineReducers } from 'redux';
import characters from './slices/charactersSlice';
import characterDetails from './slices/characterDetailsSlice';
import locationDetails from './slices/locationDetailsSlice';
import locationResidents from './slices/locationResidentsSlice';
import ui from './slices/uiSlice';

const rootReducer = combineReducers({
  characters,
  characterDetails,
  locationDetails,
  locationResidents,
  ui,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
