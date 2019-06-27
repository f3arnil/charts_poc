import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getKursData as getStoreKurs } from '@/reducer/index';
import getMaxModuloValue from '@/helpers/getMaxValue';

export const getKursState = createSelector(
  getStoreKurs,
  kursData => get(kursData, 'status'),
);

export const getKursData = createSelector(
  getStoreKurs,
  kursData => get(kursData, 'data'),
);

export const getKurs = createSelector(
  getKursData,
  data => get(data, 'kurs.data', []),
);

export const getAllocations = createSelector(
  getKursData,
  data => get(data, 'allocations.data', []),
);

export const getKursTitle = createSelector(
  getKursData,
  data => get(data, 'kurs.title', ''),
);

export const getAllocationsTitle = createSelector(
  getKursData,
  data => get(data, 'allocations.title', ''),
);

export const getMaxValue = createSelector(
  getKurs,
  getAllocations,
  (kurs, allocations) => getMaxModuloValue([...kurs, ...allocations], 'value'),
);
