import { createSelector } from 'reselect';
import get from 'lodash/get';
import { getGruppeData as getGruppe } from '@/reducer/index';

import {
  GRUPPE_COLORS_BY_INDEX,
  GRUPPE_CLASSES_BY_INDEX,
} from '@/constants/charts';

export const getGruppeState = createSelector(
  getGruppe,
  gruppeData => get(gruppeData, 'status'),
);

export const getGruppeData = createSelector(
  getGruppe,
  gruppeData => get(gruppeData, 'data'),
);

export const getCustomGruppeData = createSelector(
  getGruppeData,
  (gruppeData) => {
    return gruppeData.map((chart) => {
      return ({
        ...chart,
        data: chart.data.map((row, index) => {
          const value = row.value - row.prevValue;
          const valueString = `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;

          return ({
            ...row,
            textColor: GRUPPE_CLASSES_BY_INDEX[index],
            color: GRUPPE_COLORS_BY_INDEX[index],
            valueString,
          });
        }),
        totalValue: chart.data.reduce(
          (acc, row) => acc + Math.abs(row.value),
          0,
        ),
      });
    });
  },
);
