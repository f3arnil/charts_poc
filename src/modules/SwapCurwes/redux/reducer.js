import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const SWAP_CURWES = createAction('SWAP_CURWES');
export const CLEAR_SWAP_CURWES = createAction('CLEAR_SWAP_CURWES');

export const beginRequestSwapCurwes = () => ({
  type: SWAP_CURWES.BEGIN,
});

export const requestSwapCurwes = () => ({
  type: SWAP_CURWES.REQUEST,
});

export const responseSwapCurwes = data => ({
  type: SWAP_CURWES.SUCCESS,
  payload: { data },
});

export const errorSwapCurwes = () => ({
  type: SWAP_CURWES.ERROR,
});


export const beginClearSwapCurwes = () => ({
  type: CLEAR_SWAP_CURWES.BEGIN,
});

export const requestClearSwapCurwes = () => ({
  type: CLEAR_SWAP_CURWES.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: [],
});

export const reducer = handleActions(
  {
    [SWAP_CURWES.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [SWAP_CURWES.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_SWAP_CURWES.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
