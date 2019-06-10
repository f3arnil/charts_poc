import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getKursData as getKurs } from '@/reducer/index';

export const getKursState = createSelector(
  getKurs,
  kursData => get(kursData, 'status'),
);

export const getKursData = createSelector(
  getKurs,
  kursData => get(kursData, 'data'),
);
