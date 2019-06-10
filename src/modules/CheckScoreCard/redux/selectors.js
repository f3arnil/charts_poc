import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getCheckScoreCardData as getCheckScoreCard } from '@/reducer/index';

export const getCheckScoreCardDataState = createSelector(
  getCheckScoreCard,
  checkScoreCardData => get(checkScoreCardData, 'status'),
);

export const getCheckScoreCardData = createSelector(
  getCheckScoreCard,
  checkScoreCardData => get(checkScoreCardData, 'data'),
);
