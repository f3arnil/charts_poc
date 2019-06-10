import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getSchedulingData as getScheduling } from '@/reducer/index';

export const getSchedulingDataState = createSelector(
  getScheduling,
  schedulingData => get(schedulingData, 'status'),
);

export const getSchedulingDataEvents = createSelector(
  getScheduling,
  schedulingData => get(schedulingData, 'events'),
);
