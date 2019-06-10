import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  KURS,
  CLEAR_KURS,
  responseKurs,
  requestKurs,
  requestClearKurs,
} from './reducer';

import { fetchKurs } from '@/services/api';

export function* getKursData() {
  yield put(requestKurs());
  // const data = yield call(getSystemDataApi)
  const data = yield call(fetchKurs);

  yield put(responseKurs(data));
  // {
  //   kurs: [
  //     {
  //       name: 'Aud',
  //       value: -0.68,
  //     },
  //     {
  //       name: 'Cad',
  //       value: -0.21,
  //     },
  //     {
  //       name: 'Chf',
  //       value: 0.9,
  //     },
  //     {
  //       name: 'Gbp',
  //       value: -0.45,
  //     },
  //     {
  //       name: 'Jpy',
  //       value: 1.45,
  //     },
  //     {
  //       name: 'USD',
  //       value: -1.32,
  //     },
  //   ],
  //   allocations: [
  //     {
  //       name: 'Dax',
  //       value: 1.71,
  //     },
  //     {
  //       name: 'SDax',
  //       value: 1.54,
  //     },
  //     {
  //       name: 'MDax',
  //       value: 1.61,
  //     },
  //     {
  //       name: 'TecDax',
  //       value: 1.70,
  //     },
  //     {
  //       name: 'Euro Stoxx',
  //       value: 2.75,
  //     },
  //     {
  //       name: 'S&P 500',
  //       value: -1.21,
  //     },
  //   ],
  // }));
}

export function* clearKursData() {
  // do smth
  yield put(requestClearKurs());
}

export function* root() {
  yield all([
    yield takeLatest(KURS.BEGIN, getKursData),
    yield takeLatest(CLEAR_KURS.BEGIN, clearKursData),
  ]);
}
