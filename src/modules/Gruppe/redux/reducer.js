import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const GRUPPE = createAction('GRUPPE');
export const CLEAR_GRUPPE = createAction('CLEAR_GRUPPE');

export const beginRequestGruppe = () => ({
  type: GRUPPE.BEGIN,
});

export const requestGruppe = () => ({
  type: GRUPPE.REQUEST,
});

export const responseGruppe = data => ({
  type: GRUPPE.SUCCESS,
  payload: { data },
});

export const errorGruppe = () => ({
  type: GRUPPE.ERROR,
});


export const beginClearGruppe = () => ({
  type: CLEAR_GRUPPE.BEGIN,
});

export const requestClearGruppe = () => ({
  type: CLEAR_GRUPPE.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: [],
});

export const reducer = handleActions(
  {
    [GRUPPE.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [GRUPPE.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_GRUPPE.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
