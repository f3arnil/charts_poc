import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getGoviCurwesData as getGoviCurwes } from '@/reducer/index';

export const getGoviCurwesState = createSelector(
  getGoviCurwes,
  goviCurwes => get(goviCurwes, 'status'),
);

export const getGoviCurwesData = createSelector(
  getGoviCurwes,
  goviCurwes => get(goviCurwes, 'data'),
);

export const getGoviCurwesDataList = createSelector(
  getGoviCurwesData,
  goviCurwesData => get(goviCurwesData, 'list'),
);
export const getGoviCurwesDataChange = createSelector(
  getGoviCurwesData,
  goviCurwesData => get(goviCurwesData, 'change'),
);
