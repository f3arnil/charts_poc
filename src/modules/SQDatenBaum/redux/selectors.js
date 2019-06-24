import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getSQDatenBaumData as getSQDatenBaum } from '@/reducer/index';
import {
  CHART_COLORS_BY_INDEX,
  CHART_CLASSES_BY_INDEX,
} from '@/constants/charts';

export const getSQDatenBaumState = createSelector(
  getSQDatenBaum,
  sqDatenBaumData => get(sqDatenBaumData, 'status'),
);

export const getSQDatenBaumData = createSelector(
  getSQDatenBaum,
  sqDatenBaumData => get(sqDatenBaumData, 'data', {}),
);

export const getSQDatenBaumValues = createSelector(
  getSQDatenBaumData,
  sqDatenBaumData => get(sqDatenBaumData, 'values', []),
);

export const getSQDatenBaumTree = createSelector(
  getSQDatenBaumData,
  sqDatenBaumData => get(sqDatenBaumData, 'tree', []),
);


export const getCustomSQDatenBaumValues = createSelector(
  getSQDatenBaumValues,
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
