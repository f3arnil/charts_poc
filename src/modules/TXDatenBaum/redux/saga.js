import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  TX_DATEN_BAUM,
  CLEAR_TX_DATEN_BAUM,
  responseTXDatenBaum,
  requestTXDatenBaum,
  requestClearTXDatenBaum,
} from './reducer';
import { fetchTXDatenBaum } from '@/services/api';

export function* getTXDatenBaumData() {
  yield put(requestTXDatenBaum());
  const data = yield call(fetchTXDatenBaum);
  // yield delay(1500);
  yield put(responseTXDatenBaum(data));
  //   {
  //   values: [70, 10, 30],
  //   tree: [],
  // }));
}

export function* clearTXDatenBaumData() {
  // do smth
  yield put(requestClearTXDatenBaum());
}

export function* root() {
  yield all([
    yield takeLatest(TX_DATEN_BAUM.BEGIN, getTXDatenBaumData),
    yield takeLatest(CLEAR_TX_DATEN_BAUM.BEGIN, clearTXDatenBaumData),
  ]);
}
