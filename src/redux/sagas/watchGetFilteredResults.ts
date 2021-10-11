import { takeLatest, delay, put, call, select } from 'redux-saga/effects';
import {
  getFilteredResultsTrigger,
  getFilteredResultsSuccess,
  getFilteredResultsFailure,
} from '../slices/charactersSlice';
import { fetchApi } from './api';
import {
  CharactersResponseFromApi,
  GetFilteredResultsTriggerActionPayload,
  CharactersState,
} from '../../entities/charactersTypes';

const DEBOUNCE_DELAY = 500;

function* getFilteredResultsAsync(action: {
  type: string;
  payload: GetFilteredResultsTriggerActionPayload;
}): Generator {
  const yieldState = yield select();

  let state: CharactersState = (yieldState as any).characters;

  let pageNumber;
  let characterName;
  let characterStatus;

  if (action.payload.characterName === undefined) {
    characterName = state.filters.name;
  } else characterName = action.payload.characterName;

  if (action.payload.status === undefined) {
    characterStatus = state.filters.status;
  } else characterStatus = action.payload.status;

  if (action.payload.pageNumber === undefined) {
    pageNumber = state.pagination.pageNumber;
  } else pageNumber = action.payload.pageNumber;

  const fetchParams = {
    pageNumber,
    characterName,
    status: characterStatus === 'All' ? '' : characterStatus,
  };

  yield delay(DEBOUNCE_DELAY);

  try {
    const apiResponse = yield call(fetchApi, fetchParams);
    yield put(
      getFilteredResultsSuccess({
        info: (apiResponse as CharactersResponseFromApi).info,
        results: (apiResponse as CharactersResponseFromApi).results,
        pageNumber,
      })
    );
  } catch (err) {
    yield put(getFilteredResultsFailure(err));
  }
}

export function* watchGetFilteredResults() {
  yield takeLatest(getFilteredResultsTrigger.type, getFilteredResultsAsync);
}
