import { get } from './api';
import * as API_URLS from './constants';

export const fetchCheckScoreCard = async () => {
  const response = await get({ url: API_URLS.CHECK_SCORE_CARD_URL });
  // [TODO] Dont forget to check response status
  return response.data;
};

export const fetchGoviCurwes = async () => {
  const response = await get({ url: API_URLS.GOVI_CURVES_URL });

  return response.data;
};

export const fetchGruppe = async () => {
  const response = await get({ url: API_URLS.GRUPPE_URL });

  return response.data;
};

export const fetchKurs = async () => {
  const response = await get({ url: API_URLS.KURS_URL });

  return response.data;
};

export const fetchRSXBottomUp = async () => {
  const response = await get({ url: API_URLS.RSX_BOTTOM_UP_URL });

  return response.data;
};

export const fetchScheduling = async () => {
  const response = await get({ url: API_URLS.SCHEDULING_URL });

  return response.data;
};

export const fetchSQDatenBaum = async () => {
  const response = await get({ url: API_URLS.SQ_DATEN_BAUM_URL });

  return response.data;
};

export const fetchSwapCurwes = async () => {
  const response = await get({ url: API_URLS.SWAP_CURWES_URL });

  return response.data;
};

export const fetchSystemStatus = async () => {
  const response = await get({ url: API_URLS.SYSTEM_STATUS_URL });

  return response.data;
};

export const fetchTXDatenBaum = async () => {
  const response = await get({ url: API_URLS.TX_DATEN_BAUM_URL });

  return response.data;
};
