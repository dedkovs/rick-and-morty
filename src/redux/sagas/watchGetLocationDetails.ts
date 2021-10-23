import { takeLatest, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  getLocationDetailsTrigger,
  getLocationDetailsSuccess,
  getLocationDetailsFailure,
} from '../slices/locationDetailsSlice';
import { getLocationResidentsTrigger } from '../slices/locationResidentsSlice';
import { fetchApi } from '../../pages/locationDetails/api';
import { Location } from '../../entities/charactersTypes';

function* getLocationDetailsAsync({
  payload,
}: PayloadAction<string>): Generator {
  try {
    const apiResponse = yield call(fetchApi, payload);
    yield put(getLocationDetailsSuccess(apiResponse as Location));

    const residentsIds = (apiResponse as Location).residents.map(
      (residentUrl) => {
        const residentId = residentUrl.slice(42); ///
        return residentId;
      }
    );

    const residentsIdsString = residentsIds.join(',');
    console.log(residentsIdsString);

    yield put(getLocationResidentsTrigger(residentsIdsString));
  } catch (err) {
    yield put(getLocationDetailsFailure(err as Error));
  }
}

export function* watchGetLocationDetails() {
  yield takeLatest(getLocationDetailsTrigger.type, getLocationDetailsAsync);
}
