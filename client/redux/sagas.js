import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants.js';
import axios from 'axios';

//import below or throws error due to generator functions not liked by babel
import "regenerator-runtime/runtime";

function* fetchUsersAsync() {
  try {
    const { data } = yield axios.get('/api/users');
    yield put({ type: FETCH_USERS_SUCCESS, payload: data })
  }
  catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error })
  }
};

export function* watchFetchUsersAsync() {
  yield takeEvery(FETCH_USERS, fetchUsersAsync);
};