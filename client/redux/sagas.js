import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants.js';
//import below or throws error due to generator functions not liked by babel
import "regenerator-runtime/runtime";
import axios from 'axios';


//worker saga will perform the async fetch call
function* fetchUsersAsync() {
  try {
    const { data } = yield axios.get('/api/users');
    yield put({ type: FETCH_USERS_SUCCESS, payload: data })
  }
  catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error })
  }
};

//watcher saga will spawn a new fetchUsersAsync on each 
//FETCH_USERS
export function* watchFetchUsersAsync() {
  console.log('watchFetchUsersAsync fired');
  yield takeEvery(FETCH_USERS, fetchUsersAsync);
};

// export default function* rootSaga() {
//   yield all([call(watchFetchUsersAsync)]);
// };