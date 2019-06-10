import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  GRUPPE,
  CLEAR_GRUPPE,
  responseGruppe,
  requestGruppe,
  requestClearGruppe,
} from './reducer';

import { fetchGruppe } from '@/services/api';

export function* getGruppeData() {
  yield put(requestGruppe());
  // const data = yield call(getSystemDataApi)
  const data = yield call(fetchGruppe);
  yield put(responseGruppe(data));
  //   [
  //     {
  //       title: 'Gruppe 1',
  //       data: [
  //         {
  //           name: 'SLI',
  //           value: 0.3,
  //           dynamic: 'falen',
  //         },
  //         {
  //           name: 'Cash-YP',
  //           dynamic: 'growing',
  //           value: 5.3,
  //         },
  //         {
  //           name: 'QPR',
  //           value: 1.4,
  //           dynamic: 'growing',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Gruppe 2',
  //       data: [
  //         {
  //           name: 'SLI',
  //           value: 1.1,
  //           dynamic: 'same',
  //         },
  //         {
  //           name: 'Cash-YP',
  //           value: 2.7,
  //           dynamic: 'growing',
  //         },
  //         {
  //           name: 'QPR',
  //           value: 0.9,
  //           dynamic: 'growing',
  //         },
  //       ],
  //     },
  //   ],
  // ));
}

export function* clearGruppeData() {
  // do smth
  yield put(requestClearGruppe());
}

export function* root() {
  yield all([
    yield takeLatest(GRUPPE.BEGIN, getGruppeData),
    yield takeLatest(CLEAR_GRUPPE.BEGIN, clearGruppeData),
  ]);
}
