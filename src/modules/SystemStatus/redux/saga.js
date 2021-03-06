import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  SYSTEM_STATUS,
  CLEAR_SYSTEM_STATUS,
  responseSystemStatus,
  requestSystemStatus,
  requestClearSystemStatus,
} from './reducer';
import { fetchSystemStatus } from '@/services/api';

export function* getSystemStatusData() {
  yield put(requestSystemStatus());
  const data = yield call(fetchSystemStatus);
  // yield delay(1500);
  yield put(responseSystemStatus(data));
  //   [
  //   {
  //     date: '10.04.2019',
  //     description: 'Some amazing description',
  //   },
  //   {
  //     date: '27.03.2019',
  //     description: 'Another amazing description',
  //   },
  // ]));
}

export function* clearSystemStatusData() {
  // do smth
  yield put(requestClearSystemStatus());
}

export function* root() {
  yield all([
    yield takeLatest(SYSTEM_STATUS.BEGIN, getSystemStatusData),
    yield takeLatest(CLEAR_SYSTEM_STATUS.BEGIN, clearSystemStatusData),
  ]);
}
