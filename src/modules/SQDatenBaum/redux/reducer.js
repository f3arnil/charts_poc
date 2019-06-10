import { handleActions } from 'redux-actions';
import { createAction } from '@/helpers/createAction';
import { STATUSES } from '@/constants/redux';

export const SQ_DATEN_BAUM = createAction('SQ_DATEN_BAUM');
export const CLEAR_SQ_DATEN_BAUM = createAction('CLEAR_SQ_DATEN_BAUM');

export const beginRequestSQDatenBaum = () => ({
  type: SQ_DATEN_BAUM.BEGIN,
});

export const requestSQDatenBaum = () => ({
  type: SQ_DATEN_BAUM.REQUEST,
});

export const responseSQDatenBaum = data => ({
  type: SQ_DATEN_BAUM.SUCCESS,
  payload: { data },
});

export const errorSQDatenBaum = () => ({
  type: SQ_DATEN_BAUM.ERROR,
});


export const beginClearSQDatenBaum = () => ({
  type: CLEAR_SQ_DATEN_BAUM.BEGIN,
});

export const requestClearSQDatenBaum = () => ({
  type: CLEAR_SQ_DATEN_BAUM.REQUEST,
});

const getInitialReducerState = () => ({
  status: STATUSES.NOT_REQUESTED,
  data: {},
});

export const reducer = handleActions(
  {
    [SQ_DATEN_BAUM.REQUEST]: state => ({
      ...state,
      status: STATUSES.PENDING,
    }),
    [SQ_DATEN_BAUM.SUCCESS]: (state, { payload: { data } }) => {
      return ({
        ...state,
        status: STATUSES.IDLE,
        data,
      });
    },
    [CLEAR_SQ_DATEN_BAUM.REQUEST]: () => getInitialReducerState(),
  },
  getInitialReducerState(),
);

export default reducer;
