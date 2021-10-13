import { takeLatest, put, call, select } from 'redux-saga/effects';
import {
  getDataTrigger,
  getDataSuccess,
  getDataFailure,
} from '../slices/charactersSlice';
import { fetchApi } from '../../pages/home/api';
import { ApiResponse } from '../../entities/charactersTypes';
import { getQueryUrl } from '../../helpers/getQueryUrl';

function* getDataAsync(): Generator {
  const filters = yield select((state) => state.characters.filters);

  try {
    const apiResponse = yield call(
      fetchApi,
      getQueryUrl(filters as URLSearchParams)
    );
    yield put(getDataSuccess(apiResponse as ApiResponse));
  } catch (err) {
    yield put(getDataFailure(err as Error));
  }
}

export function* watchGetData() {
  yield takeLatest(getDataTrigger.type, getDataAsync);
}
