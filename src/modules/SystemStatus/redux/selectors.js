import { createSelector } from 'reselect';
import get from 'lodash/get';
import { getSystemStatusData } from '@/reducer/index';

export const getSystemStatusState = createSelector(
  getSystemStatusData,
  systemData => get(systemData, 'status'),
);

export const getSystemStatusEvents = createSelector(
  getSystemStatusData,
  systemData => get(systemData, 'events'),
);
