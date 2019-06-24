import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getSchedulingData as getScheduling } from '@/reducer/index';

import StatusDot from '@/components/blocks/StatusDot';
import PlanBlock from '@/components/blocks/PlanBlock';

export const getSchedulingDataState = createSelector(
  getScheduling,
  schedulingData => get(schedulingData, 'status'),
);

export const getSchedulingDataEvents = createSelector(
  getScheduling,
  schedulingData => get(schedulingData, 'events'),
);

export const getCustomSchedulingDataEvents = createSelector(
  getSchedulingDataEvents,
  (events) => {
    return events.map(row => ({
      plan: {
        component: PlanBlock,
        props: row,
      },
      status: {
        component: StatusDot,
        props: {
          color: row.status,
        },
      },
    }));
  },
);
