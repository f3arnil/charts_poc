import {
  all,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import {
  RSX_BOTTOM_UP,
  CLEAR_RSX_BOTTOM_UP,
  responseRSXBottomUp,
  requestRSXBottomUp,
  requestClearRSXBottomUp,
} from './reducer';

export function* getRSXBottomUpData() {
  yield put(requestRSXBottomUp());
  // const data = yield call(getSystemDataApi)
  yield delay(1500);
  yield put(responseRSXBottomUp({
    values: [24, 79, 94],
  }));
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
