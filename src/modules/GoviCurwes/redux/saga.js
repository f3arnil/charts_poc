import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  GOVI_CURWES,
  CLEAR_GOVI_CURWES,
  responseGoviCurwes,
  requestGoviCurwes,
  requestClearGoviCurwes,
} from './reducer';

import { fetchGoviCurwes } from '@/services/api';

export function* getGoviCurwesData() {
  yield put(requestGoviCurwes());
  // const data = yield call(getSystemDataApi)
  const data = yield call(fetchGoviCurwes);
  yield put(responseGoviCurwes(data));
  // {
  //   list: [
  //     {
  //       name: 'Cad',
  //       data: [2.6, 0.3, 0.1, 2.2],
  //     },
  //     {
  //       name: 'Eur',
  //       data: [-3.5, -4.4, 3.0, -5.8],
  //     },
  //     {
  //       name: 'GBP',
  //       data: [-3.4, 3.1, -2.9, -2.9],
  //     },
  //     {
  //       name: 'USD',
  //       data: [-0.1, -1.7, -2.7, -3.7],
  //     },
  //   ],
  //   change: [5, 7, 10, 25],
  // }
}

export function* clearGoviCurwesData() {
  // do smth
  yield put(requestClearGoviCurwes());
}

export function* root() {
  yield all([
    yield takeLatest(GOVI_CURWES.BEGIN, getGoviCurwesData),
    yield takeLatest(CLEAR_GOVI_CURWES.BEGIN, clearGoviCurwesData),
  ]);
}
