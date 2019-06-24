import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getTXDatenBaumData as getTXDatenBaum } from '@/reducer';
import {
  CHART_COLORS_BY_INDEX,
  CHART_CLASSES_BY_INDEX,
} from '@/constants/charts';

export const getTXDatenBaumState = createSelector(
  getTXDatenBaum,
  TXDatenBaumData => get(TXDatenBaumData, 'status'),
);

export const getTXDatenBaumData = createSelector(
  getTXDatenBaum,
  TXDatenBaumData => get(TXDatenBaumData, 'data', {}),
);

export const getTXDatenBaumValues = createSelector(
  getTXDatenBaumData,
  TXDatenBaumData => get(TXDatenBaumData, 'values', []),
);

export const getCustomTXDatenBaumValues = createSelector(
  getTXDatenBaumValues,
  (data) => {
    return data.map((value, index) => ({
      values: [{
        ...value,
        color: CHART_COLORS_BY_INDEX[index],
      }],
      label: value.value,
      color: CHART_CLASSES_BY_INDEX[index],
    }));
  },
);

export const getTXDatenBaumTree = createSelector(
  getTXDatenBaumData,
  TXDatenBaumData => get(TXDatenBaumData, 'tree', []),
);
