import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getRSXBottomUpData as getRSXBottomUp } from '@/reducer';
import {
  CHART_COLORS_BY_INDEX,
  CHART_CLASSES_BY_INDEX,
} from '@/constants/charts';

export const getRSXBottomUpState = createSelector(
  getRSXBottomUp,
  rsxBottomUpData => get(rsxBottomUpData, 'status'),
);

export const getRSXBottomUpData = createSelector(
  getRSXBottomUp,
  rsxBottomUpData => get(rsxBottomUpData, 'data', {}),
);

export const getRSXBottomUpValues = createSelector(
  getRSXBottomUpData,
  rsxBottomUpData => get(rsxBottomUpData, 'values', []),
);

export const getCustomRSXBottomUpValues = createSelector(
  getRSXBottomUpValues,
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
