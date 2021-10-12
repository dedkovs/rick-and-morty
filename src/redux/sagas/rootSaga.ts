import { all } from 'redux-saga/effects';
import { watchGetData } from './watchGetData';

export function* rootSaga() {
  yield all([watchGetData()]);
}
