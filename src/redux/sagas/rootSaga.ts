import { all } from 'redux-saga/effects';
import { watchGetData } from './watchGetData';
import { watchGetCharacterDetails } from './watchGetCharacterDetails';
import { watchGetLocationDetails } from './watchGetLocationDetails';
import { watchGetLocationResidents } from './watchGetLocationResidents';

export function* rootSaga() {
  yield all([
    watchGetData(),
    watchGetCharacterDetails(),
    watchGetLocationDetails(),
    watchGetLocationResidents(),
  ]);
}
