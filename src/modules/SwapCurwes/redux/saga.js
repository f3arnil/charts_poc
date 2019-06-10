import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  SWAP_CURWES,
  CLEAR_SWAP_CURWES,
  responseSwapCurwes,
  requestSwapCurwes,
  requestClearSwapCurwes,
} from './reducer';
import { fetchSwapCurwes } from '@/services/api';

export function* getSwapCurwesData() {
  yield put(requestSwapCurwes());
  const data = yield call(fetchSwapCurwes);
  // yield delay(1500);
  yield put(responseSwapCurwes(data));
  //   {
  //   list: [
  //     {
  //       name: 'Cad',
  //       data: [1.2, 0.7, 0.4, -0.6],
  //     },
  //     {
  //       name: 'Eur',
  //       data: [-1.0, 4.7, 2.0, -1],
  //     },
  //     {
  //       name: 'GBP',
  //       data: [-2.4, 1.9, -5.2, -2.9],
  //     },
  //     {
  //       name: 'USD',
  //       data: [-3.7, -2.7, -1.7, -0.1],
  //     },
  //   ],
  //   change: [5, 7, 10, 25],
  // }));
}

export function* clearSwapCurwesData() {
  // do smth
  yield put(requestClearSwapCurwes());
}

export function* root() {
  yield all([
    yield takeLatest(SWAP_CURWES.BEGIN, getSwapCurwesData),
    yield takeLatest(CLEAR_SWAP_CURWES.BEGIN, clearSwapCurwesData),
  ]);
}
