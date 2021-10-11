import { combineReducers } from 'redux';
import characters from './slices/charactersSlice';

const rootReducer = combineReducers({
  characters,
});

export default rootReducer;
