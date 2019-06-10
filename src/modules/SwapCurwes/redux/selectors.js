import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getSwapCurwesData as getSwapCurwes } from '@/reducer/index';

export const getSwapCurwesState = createSelector(
  getSwapCurwes,
  swapCurwes => get(swapCurwes, 'status'),
);

export const getSwapCurwesData = createSelector(
  getSwapCurwes,
  swapCurwes => get(swapCurwes, 'data'),
);

export const getSwapCurwesDataList = createSelector(
  getSwapCurwesData,
  swapCurwesData => get(swapCurwesData, 'list'),
);
export const getSwapCurwesDataChange = createSelector(
  getSwapCurwesData,
  swapCurwesData => get(swapCurwesData, 'change'),
);
