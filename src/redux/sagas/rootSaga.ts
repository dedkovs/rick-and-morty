import { all } from 'redux-saga/effects';
import { watchGetFilteredResults } from './watchGetFilteredResults';

export function* rootSaga() {
  yield all([watchGetFilteredResults()]);
}
