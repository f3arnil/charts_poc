import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const SYSTEM_STATUS = createAction('SYSTEM_STATUS');
export const CLEAR_SYSTEM_STATUS = createAction('CLEAR_SYSTEM_STATUS');

export const beginRequestSystemStatus = () => ({
  type: SYSTEM_STATUS.BEGIN,
});

export const requestSystemStatus = () => ({
  type: SYSTEM_STATUS.REQUEST,
});

export const responseSystemStatus = events => ({
  type: SYSTEM_STATUS.SUCCESS,
  payload: { events },
});

export const errorSystemStatus = () => ({
  type: SYSTEM_STATUS.ERROR,
});


export const beginClearSystemStatus = () => ({
  type: CLEAR_SYSTEM_STATUS.BEGIN,
});

export const requestClearSystemStatus = () => ({
  type: CLEAR_SYSTEM_STATUS.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  events: [],
});

export const reducer = handleActions(
  {
    [SYSTEM_STATUS.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [SYSTEM_STATUS.SUCCESS]: (state, { payload: { events } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        events,
      });
    },
    [CLEAR_SYSTEM_STATUS.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
