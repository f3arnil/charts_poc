import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const RSX_BOTTOM_UP = createAction('RSX_BOTTOM_UP');
export const CLEAR_RSX_BOTTOM_UP = createAction('CLEAR_RSX_BOTTOM_UP');

export const beginRequestRSXBottomUp = () => ({
  type: RSX_BOTTOM_UP.BEGIN,
});

export const requestRSXBottomUp = () => ({
  type: RSX_BOTTOM_UP.REQUEST,
});

export const responseRSXBottomUp = data => ({
  type: RSX_BOTTOM_UP.SUCCESS,
  payload: data,
});

export const errorRSXBottomUp = () => ({
  type: RSX_BOTTOM_UP.ERROR,
});


export const beginClearRSXBottomUp = () => ({
  type: CLEAR_RSX_BOTTOM_UP.BEGIN,
});

export const requestClearRSXBottomUp = () => ({
  type: CLEAR_RSX_BOTTOM_UP.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: {},
});

export const reducer = handleActions(
  {
    [RSX_BOTTOM_UP.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [RSX_BOTTOM_UP.SUCCESS]: (state, { payload: data }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_RSX_BOTTOM_UP.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
