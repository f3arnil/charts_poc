import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getSwapCurwesData as getSwapCurwes } from '@/reducer/index';
import getMaxModuloValue from '@/helpers/getMaxValue';
import DotedChart from '@/components/blocks/DotedChart';

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

export const getMaxValue = createSelector(
  getSwapCurwesDataList,
  list => getMaxModuloValue(list, 'data'),
);

export const getCustomSwapCurwesData = createSelector(
  getSwapCurwesDataList,
  getSwapCurwesDataChange,
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
