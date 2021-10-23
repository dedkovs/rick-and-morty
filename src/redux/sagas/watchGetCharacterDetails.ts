import { takeLatest, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  getCharacterDetailsTrigger,
  getCharacterDetailsSuccess,
  getCharacterDetailsFailure,
} from '../slices/characterDetailsSlice';
import { fetchApi } from '../../pages/characterDetails/api';
import { Character } from '../../entities/charactersTypes';

function* getCharacterDetailsAsync({
  payload,
}: PayloadAction<string>): Generator {
  try {
    const apiResponse = yield call(fetchApi, payload);
    yield put(getCharacterDetailsSuccess(apiResponse as Character));
  } catch (err) {
    yield put(getCharacterDetailsFailure(err as Error));
  }
}

export function* watchGetCharacterDetails() {
  yield takeLatest(getCharacterDetailsTrigger.type, getCharacterDetailsAsync);
}
