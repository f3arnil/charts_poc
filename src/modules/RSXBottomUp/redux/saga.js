import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  RSX_BOTTOM_UP,
  CLEAR_RSX_BOTTOM_UP,
  responseRSXBottomUp,
  requestRSXBottomUp,
  requestClearRSXBottomUp,
} from './reducer';
import { fetchRSXBottomUp } from '@/services/api';

export function* getRSXBottomUpData() {
  yield put(requestRSXBottomUp());
  // const data = yield call(getSystemDataApi)
  const data = yield call(fetchRSXBottomUp);
  yield put(responseRSXBottomUp(data));
  // {
  //   values: [24, 79, 94],
  // }));
}

export function* clearRSXBottomUpData() {
  // do smth
  yield put(requestClearRSXBottomUp());
}

export function* root() {
  yield all([
    yield takeLatest(RSX_BOTTOM_UP.BEGIN, getRSXBottomUpData),
    yield takeLatest(CLEAR_RSX_BOTTOM_UP.BEGIN, clearRSXBottomUpData),
  ]);
}
