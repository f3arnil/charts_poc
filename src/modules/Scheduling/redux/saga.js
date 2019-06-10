import {
  all,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import {
  SCHEDULING_DATA,
  CLEAR_SCHEDULING_DATA,
  responseSchedulingData,
  requestSchedulingData,
  requestClearSchedulingData,
} from './reducer';

export function* getSchedulingDataData() {
  yield put(requestSchedulingData());
  // const data = yield call(getSystemDataApi)
  yield delay(1500);
  yield put(responseSchedulingData([
    {
      date: '10.03.2019',
      type: 'Daily',
      status: 'red',
      description: 'Some amazing description',
    },
    {
      date: '07.03.2019',
      type: 'Monthly',
      status: 'yellow',
      description: 'Another amazing description',
    },
    {
      date: '02.03.2019',
      type: 'Quarterly',
      status: 'green',
      description: 'Another amazing description',
    },
    {
      date: '31.02.2019',
      type: 'Daily',
      status: 'red',
      description: 'Some amazing description',
    },
    {
      date: '27.02.2019',
      type: 'Monthly',
      status: 'yellow',
      description: 'Another amazing description',
    },
    {
      date: '11.02.2019',
      type: 'Quarterly',
      status: 'green',
      description: 'Another amazing description',
    },
    {
      date: '05.02.2019',
      type: 'Quarterly',
      status: 'green',
      description: 'Another amazing description',
    },
  ]));
}

export function* clearSchedulingDataData() {
  // do smth
  yield put(requestClearSchedulingData());
}

export function* root() {
  yield all([
    yield takeLatest(SCHEDULING_DATA.BEGIN, getSchedulingDataData),
    yield takeLatest(CLEAR_SCHEDULING_DATA.BEGIN, clearSchedulingDataData),
  ]);
}
