import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getTXDatenBaumData as getTXDatenBaum } from '@/reducer';

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

export const getTXDatenBaumTree = createSelector(
  getTXDatenBaumData,
  TXDatenBaumData => get(TXDatenBaumData, 'tree', []),
);
