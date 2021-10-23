import { takeLatest, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  getLocationResidentsTrigger,
  getLocationResidentsSuccess,
  getLocationResidentsFailure,
} from '../slices/locationResidentsSlice';
import { fetchApi } from '../../pages/locationDetails/apiResidents';
import { Character } from '../../entities/charactersTypes';

function* getLocationResidentsAsync({
  payload,
}: PayloadAction<string>): Generator {
  try {
    const apiResponse = yield call(fetchApi, payload);
    yield put(getLocationResidentsSuccess(apiResponse as Character[]));
  } catch (err) {
    yield put(getLocationResidentsFailure(err as Error));
  }
}

export function* watchGetLocationResidents() {
  yield takeLatest(getLocationResidentsTrigger.type, getLocationResidentsAsync);
}
