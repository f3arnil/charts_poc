import {
  all,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import {
  SQ_DATEN_BAUM,
  CLEAR_SQ_DATEN_BAUM,
  responseSQDatenBaum,
  requestSQDatenBaum,
  requestClearSQDatenBaum,
} from './reducer';

export function* getSQDatenBaumData() {
  yield put(requestSQDatenBaum());
  // const data = yield call(getSystemDataApi)
  yield delay(1500);
  yield put(responseSQDatenBaum({
    values: [34, 79, 11],
    tree: [],
  }));
}

export function* clearSQDatenBaumData() {
  // do smth
  yield put(requestClearSQDatenBaum());
}

export function* root() {
  yield all([
    yield takeLatest(SQ_DATEN_BAUM.BEGIN, getSQDatenBaumData),
    yield takeLatest(CLEAR_SQ_DATEN_BAUM.BEGIN, clearSQDatenBaumData),
  ]);
}
