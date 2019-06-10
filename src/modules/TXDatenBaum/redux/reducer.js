import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const TX_DATEN_BAUM = createAction('TX_DATEN_BAUM');
export const CLEAR_TX_DATEN_BAUM = createAction('CLEAR_TX_DATEN_BAUM');

export const beginRequestTXDatenBaum = () => ({
  type: TX_DATEN_BAUM.BEGIN,
});

export const requestTXDatenBaum = () => ({
  type: TX_DATEN_BAUM.REQUEST,
});

export const responseTXDatenBaum = data => ({
  type: TX_DATEN_BAUM.SUCCESS,
  payload: { data },
});

export const errorTXDatenBaum = () => ({
  type: TX_DATEN_BAUM.ERROR,
});


export const beginClearTXDatenBaum = () => ({
  type: CLEAR_TX_DATEN_BAUM.BEGIN,
});

export const requestClearTXDatenBaum = () => ({
  type: CLEAR_TX_DATEN_BAUM.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: {},
});

export const reducer = handleActions(
  {
    [TX_DATEN_BAUM.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [TX_DATEN_BAUM.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_TX_DATEN_BAUM.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
