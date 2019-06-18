import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getGoviCurwesData as getGoviCurwes } from '@/reducer/index';
import getMaxModuloValue from '@/helpers/getMaxValue';

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

export const getMaxValue = createSelector(
  getGoviCurwesDataList,
  list => getMaxModuloValue(list, 'data'),
);
