import { createSelector } from 'reselect';
import get from 'lodash/get';
import { getRSXBottomUpData as getRSXBottomUp } from '@/reducer';

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
