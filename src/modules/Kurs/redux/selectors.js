import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getKursData as getStoreKurs } from '@/reducer/index';

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

export const getKursTitile = createSelector(
  getKursData,
  data => get(data, 'kurs.title', []),
);

export const getAllocationsTitle = createSelector(
  getKursData,
  data => get(data, 'allocations.title', []),
);
