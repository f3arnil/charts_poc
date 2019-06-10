import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const SCHEDULING_DATA = createAction('SCHEDULING_DATA');
export const CLEAR_SCHEDULING_DATA = createAction('CLEAR_SCHEDULING_DATA');

export const beginRequestSchedulingData = () => ({
  type: SCHEDULING_DATA.BEGIN,
});

export const requestSchedulingData = () => ({
  type: SCHEDULING_DATA.REQUEST,
});

export const responseSchedulingData = events => ({
  type: SCHEDULING_DATA.SUCCESS,
  payload: { events },
});

export const errorSchedulingData = () => ({
  type: SCHEDULING_DATA.ERROR,
});


export const beginClearSchedulingData = () => ({
  type: CLEAR_SCHEDULING_DATA.BEGIN,
});

export const requestClearSchedulingData = () => ({
  type: CLEAR_SCHEDULING_DATA.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  events: [],
});

export const reducer = handleActions(
  {
    [SCHEDULING_DATA.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [SCHEDULING_DATA.SUCCESS]: (state, { payload: { events } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        events,
      });
    },
    [CLEAR_SCHEDULING_DATA.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
