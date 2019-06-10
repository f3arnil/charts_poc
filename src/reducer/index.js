import { combineReducers } from 'redux';
import { get } from 'lodash';

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
});

export const getSystemStatusData = state => get(state, 'systemStatus', {});
export const getSwapCurwesData = state => get(state, 'swapCurwes', {});
export const getSQDatenBaumData = state => get(state, 'sqDatenBaum', {});
export const getTXDatenBaumData = state => get(state, 'txDatenBaum', {});
export const getSchedulingData = state => get(state, 'scheduling', {});
export const getRSXBottomUpData = state => get(state, 'rsxBottomUp', {});
export const getKursData = state => get(state, 'kurs', {});
export const getGruppeData = state => get(state, 'gruppe', {});
export const getGoviCurwesData = state => get(state, 'goviCurwes', {});
export const getCheckScoreCardData = state => get(state, 'checkScoreCard', {});
