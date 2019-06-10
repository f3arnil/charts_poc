import { createSelector } from 'reselect';
import { get } from 'lodash';
import { getGruppeData as getGruppe } from '@/reducer/index';

export const getGruppeState = createSelector(
  getGruppe,
  gruppeData => get(gruppeData, 'status'),
);

export const getGruppeData = createSelector(
  getGruppe,
  gruppeData => get(gruppeData, 'data'),
);
