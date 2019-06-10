import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getSQDatenBaumData as getSQDatenBaum } from '@/reducer/index';

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
