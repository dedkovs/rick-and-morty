import { combineReducers } from 'redux';
import characters from './slices/charactersSlice';

const rootReducer = combineReducers({
  characters,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
