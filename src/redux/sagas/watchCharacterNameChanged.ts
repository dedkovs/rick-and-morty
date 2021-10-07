import axios from 'axios';
import { takeLatest, delay, put } from 'redux-saga/effects';
import {
  setCharacterName,
  setFilteredCharactersFromApi,
  inputChanged,
} from '../slices/characters.slice';
import { setCharacterNameError } from '../slices/error.slice';
import { setPagesCount } from '../slices/pagination.slice';
import {
  CharactersResponseFromApi,
  CHARACTER_NAME_CHANGED,
} from '../slices/characters.types';

const ERROR_NOT_FOUND = 'Nothing was found';
const CHARACTER_BASE_URL = 'https://rickandmortyapi.com/api/character';
const DEBOUNCE_DELAY = 500;

function* handleCharacterNameChanged({
  // getRickAndMortyStaffAsync
  type,
  payload,
}: {
  type: CHARACTER_NAME_CHANGED;
  payload: string;
}): Generator {
  const trimmedPayload = payload.trim();
  if (trimmedPayload === '') {
    yield put(setFilteredCharactersFromApi([]));
    yield put(setPagesCount(0));
    yield put(setCharacterNameError(''));
    return;
  }
  yield delay(DEBOUNCE_DELAY);
  yield put(setCharacterName(trimmedPayload));

  try {
    const apiResponse = yield axios
      .get(`${CHARACTER_BASE_URL}/?name=${trimmedPayload}`)
      .then((res) => res.data);
    yield put(setCharacterNameError(''));
    const filteredCharactersFromApi = (apiResponse as CharactersResponseFromApi)
      .results;
    yield put(setFilteredCharactersFromApi(filteredCharactersFromApi));
    yield put(
      setPagesCount((apiResponse as CharactersResponseFromApi).info.pages)
    );
  } catch (err) {
    yield put(setFilteredCharactersFromApi([]));
    yield put(setPagesCount(0)); //
    yield put(setCharacterNameError(ERROR_NOT_FOUND));
  }
}

export function* watchCharacterNameChanged() {
  //
  yield takeLatest(inputChanged.type, handleCharacterNameChanged);
}
