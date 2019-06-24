import { createSelector } from 'reselect';
import get from 'lodash/get';

import { getCheckScoreCardData as getCheckScoreCard } from '@/reducer/index';

import { getFormatedDate } from '@/helpers/formaters';
import StatusDot from '@/components/blocks/StatusDot';

export const getCheckScoreCardDataState = createSelector(
  getCheckScoreCard,
  checkScoreCardData => get(checkScoreCardData, 'status'),
);

export const getCheckScoreCardData = createSelector(
  getCheckScoreCard,
  checkScoreCardData => get(checkScoreCardData, 'data'),
);

export const getCustomCheckScoreCardData = createSelector(
  getCheckScoreCardData,
  (data) => {
    return data
      .map(row => ({
        ...row,
        status: {
          component: StatusDot,
          props: {
            color: row.status,
          },
        },
        date: getFormatedDate(row.date),
      }));
  },
);
