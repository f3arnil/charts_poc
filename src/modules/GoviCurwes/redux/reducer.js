import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const GOVI_CURWES = createAction('GOVI_CURWES');
export const CLEAR_GOVI_CURWES = createAction('CLEAR_GOVI_CURWES');

export const beginRequestGoviCurwes = () => ({
  type: GOVI_CURWES.BEGIN,
});

export const requestGoviCurwes = () => ({
  type: GOVI_CURWES.REQUEST,
});

export const responseGoviCurwes = data => ({
  type: GOVI_CURWES.SUCCESS,
  payload: { data },
});

export const errorGoviCurwes = () => ({
  type: GOVI_CURWES.ERROR,
});


export const beginClearGoviCurwes = () => ({
  type: CLEAR_GOVI_CURWES.BEGIN,
});

export const requestClearGoviCurwes = () => ({
  type: CLEAR_GOVI_CURWES.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: [],
});

export const reducer = handleActions(
  {
    [GOVI_CURWES.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [GOVI_CURWES.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_GOVI_CURWES.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
