import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const CHECK_SCORE_CARD = createAction('CHECK_SCORE_CARD');
export const CLEAR_CHECK_SCORE_CARD = createAction('CLEAR_CHECK_SCORE_CARD');

export const beginRequestCheckScoreCardData = () => ({
  type: CHECK_SCORE_CARD.BEGIN,
});

export const requestCheckScoreCardData = () => ({
  type: CHECK_SCORE_CARD.REQUEST,
});

export const responseCheckScoreCardData = data => ({
  type: CHECK_SCORE_CARD.SUCCESS,
  payload: { data },
});

export const errorCheckScoreCardData = () => ({
  type: CHECK_SCORE_CARD.ERROR,
});


export const beginClearCheckScoreCardData = () => ({
  type: CLEAR_CHECK_SCORE_CARD.BEGIN,
});

export const requestClearCheckScoreCardData = () => ({
  type: CLEAR_CHECK_SCORE_CARD.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: [],
});

export const reducer = handleActions(
  {
    [CHECK_SCORE_CARD.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [CHECK_SCORE_CARD.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_CHECK_SCORE_CARD.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
