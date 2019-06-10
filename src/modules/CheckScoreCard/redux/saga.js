import {
  all,
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  CHECK_SCORE_CARD,
  CLEAR_CHECK_SCORE_CARD,
  responseCheckScoreCardData,
  requestCheckScoreCardData,
  requestClearCheckScoreCardData,
} from './reducer';

import { fetchCheckScoreCard } from '@/services/api';

export function* getCheckScoreCardDataData() {
  yield put(requestCheckScoreCardData());
  const data = yield call(fetchCheckScoreCard);
  yield put(responseCheckScoreCardData(data));
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
