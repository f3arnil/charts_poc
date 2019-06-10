import {
  all,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import {
  KURS,
  CLEAR_KURS,
  responseKurs,
  requestKurs,
  requestClearKurs,
} from './reducer';

export function* getKursData() {
  yield put(requestKurs());
  // const data = yield call(getSystemDataApi)
  yield delay(1500);
  yield put(responseKurs(
    [
      {
        title: 'Kurs wahrung',
        data: [
          {
            name: 'Aud',
            value: -0.68,
          },
          {
            name: 'Cad',
            value: -0.68,
          },
          {
            name: 'Chf',
            value: 0.9,
          },
          {
            name: 'Gbp',
            value: -0.45,
          },
          {
            name: 'Jpy',
            value: 1.45,
          },
          {
            name: 'USD',
            value: -1.32,
          },
        ],
      },
      {
        title: 'Allocations factor',
        data: [
          {
            name: 'Dax',
            value: 1.71,
          },
          {
            name: 'SDax',
            value: 1.54,
          },
          {
            name: 'MDax',
            value: 1.61,
          },
          {
            name: 'TecDax',
            value: 1.70,
          },
          {
            name: 'Euro Stoxx',
            value: 2.75,
          },
          {
            name: 'S&P 500',
            value: -1.21,
          },
        ],
      },
    ],
  ));
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
