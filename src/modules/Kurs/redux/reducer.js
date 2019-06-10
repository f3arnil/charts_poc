import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const KURS = createAction('KURS');
export const CLEAR_KURS = createAction('CLEAR_KURS');

export const beginRequestKurs = () => ({
  type: KURS.BEGIN,
});

export const requestKurs = () => ({
  type: KURS.REQUEST,
});

export const responseKurs = data => ({
  type: KURS.SUCCESS,
  payload: { data },
});

export const errorKurs = () => ({
  type: KURS.ERROR,
});


export const beginClearKurs = () => ({
  type: CLEAR_KURS.BEGIN,
});

export const requestClearKurs = () => ({
  type: CLEAR_KURS.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: [],
});

export const reducer = handleActions(
  {
    [KURS.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [KURS.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_KURS.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
