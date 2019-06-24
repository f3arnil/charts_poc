import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getGoviCurwesData as getGoviCurwes } from '@/reducer/index';
import getMaxModuloValue from '@/helpers/getMaxValue';
import DotedChart from '@/components/blocks/DotedChart';

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

export const getCustomGoviCurwesData = createSelector(
  getGoviCurwesDataList,
  getGoviCurwesDataChange,
  getMaxValue,
  (list, change, maxValue) => {
    if (!list) {
      return [];
    }

    const dataArray = [
      ...list,
      {
        name: 'Change in BP',
        smallText: true,
        data: change,
      },
    ];

    const dataArrayForRedner = dataArray
      .map((row, index) => ({
        ...row,
        data: {
          component: DotedChart,
          props: {
            maxValue,
            withoutDots: index === dataArray.length - 1,
            data: row.data,
          },
        },
      }));

    return dataArrayForRedner;
  },
);
