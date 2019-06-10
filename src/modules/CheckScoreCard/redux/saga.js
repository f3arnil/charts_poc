import {
  all,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import {
  CHECK_SCORE_CARD,
  CLEAR_CHECK_SCORE_CARD,
  responseCheckScoreCardData,
  requestCheckScoreCardData,
  requestClearCheckScoreCardData,
} from './reducer';

export function* getCheckScoreCardDataData() {
  yield put(requestCheckScoreCardData());
  // const data = yield call(getSystemDataApi)
  yield delay(1500);
  yield put(responseCheckScoreCardData([
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

export function* clearCheckScoreCardDataData() {
  // do smth
  yield put(requestClearCheckScoreCardData());
}

export function* root() {
  yield all([
    yield takeLatest(CHECK_SCORE_CARD.BEGIN, getCheckScoreCardDataData),
    yield takeLatest(CLEAR_CHECK_SCORE_CARD.BEGIN, clearCheckScoreCardDataData),
  ]);
}
