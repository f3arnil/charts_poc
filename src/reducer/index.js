import { combineReducers } from 'redux';
import { get } from 'lodash';
import { createSelector } from 'reselect';

import { reducer as systemStatusReducer } from '@/modules/SystemStatus/redux/reducer';
import { reducer as swapCurwesReducer } from '@/modules/SwapCurwes/redux/reducer';
import { reducer as SQDatenBaumReducer } from '@/modules/SQDatenBaum/redux/reducer';
import { reducer as TXDatenBaumReducer } from '@/modules/TXDatenBaum/redux/reducer';
import { reducer as SchedulingReducer } from '@/modules/Scheduling/redux/reducer';
import { reducer as RSXBottomUpReducer } from '@/modules/RSXBottomUp/redux/reducer';
import { reducer as KursReducer } from '@/modules/Kurs/redux/reducer';
import { reducer as GruppeReducer } from '@/modules/Gruppe/redux/reducer';
import { reducer as goviCurwesReducer } from '@/modules/GoviCurwes/redux/reducer';
import { reducer as checkScoreCardReducer } from '@/modules/CheckScoreCard/redux/reducer';

export default combineReducers({
  entities: combineReducers({
    systemStatus: systemStatusReducer,
    swapCurwes: swapCurwesReducer,
    sqDatenBaum: SQDatenBaumReducer,
    txDatenBaum: TXDatenBaumReducer,
    scheduling: SchedulingReducer,
    rsxBottomUp: RSXBottomUpReducer,
    kurs: KursReducer,
    gruppe: GruppeReducer,
    goviCurwes: goviCurwesReducer,
    checkScoreCard: checkScoreCardReducer,
  }),
});

export const getEntities = state => get(state, 'entities', {});
export const getSystemStatusData = createSelector(
  getEntities,
  entities => get(entities, 'systemStatus', {}),
);

export const getSwapCurwesData = createSelector(
  getEntities,
  entities => get(entities, 'swapCurwes', {}),
);

export const getSQDatenBaumData = createSelector(
  getEntities,
  entities => get(entities, 'sqDatenBaum', {}),
);

export const getTXDatenBaumData = createSelector(
  getEntities,
  entities => get(entities, 'txDatenBaum', {}),
);

export const getSchedulingData = createSelector(
  getEntities,
  entities => get(entities, 'scheduling', {}),
);

export const getRSXBottomUpData = createSelector(
  getEntities,
  entities => get(entities, 'rsxBottomUp', {}),
);

export const getKursData = createSelector(
  getEntities,
  entities => get(entities, 'kurs', {}),
);

export const getGruppeData = createSelector(
  getEntities,
  entities => get(entities, 'gruppe', {}),
);

export const getGoviCurwesData = createSelector(
  getEntities,
  entities => get(entities, 'goviCurwes', {}),
);

export const getCheckScoreCardData = createSelector(
  getEntities,
  entities => get(entities, 'checkScoreCard', {}),
);
