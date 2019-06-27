export const WIDGET_TYPES = {
  SYSTEM_STATUS: 'SYSTEM_STATUS',
  SWAP_CURVES: 'SWAP_CURVES',
  SQ_DATENBAUM: 'SQ_DATENBAUM',
  TX_DATENBAUM: 'TX_DATENBAUM',
  SCHEDULING: 'SCHEDULING',
  RSX_BOTTOM_UP: 'RSX_BOTTOM_UP',
  KURS: 'KURS',
  GRUPPE: 'GRUPPE',
  GOVI_CURVES: 'GOVI_CURVES',
  CHECK_SCORE_CARD: 'CHECK_SCORE_CARD',
};

export const WIDGET_TITLES = {
  [WIDGET_TYPES.SYSTEM_STATUS]: 'SYSTEM STATUS',
  [WIDGET_TYPES.SWAP_CURVES]: 'SWAP CURVES',
  [WIDGET_TYPES.SQ_DATENBAUM]: 'DATENBAUM',
  [WIDGET_TYPES.TX_DATENBAUM]: 'DATENBAUM',
  [WIDGET_TYPES.SCHEDULING]: 'SCHEDULING',
  [WIDGET_TYPES.RSX_BOTTOM_UP]: 'BOTTOM UP',
  [WIDGET_TYPES.KURS]: 'KURS-WÄHRUNG & ALLOKATIONSFAKTOR',
  [WIDGET_TYPES.GRUPPE]: 'GRUPPE I & II',
  [WIDGET_TYPES.GOVI_CURVES]: 'GOVI CURVES',
  [WIDGET_TYPES.CHECK_SCORE_CARD]: 'CHECK SCORECARD',
};

export const WIDGET_SYSTEM_STATUS = {
  type: WIDGET_TYPES.SYSTEM_STATUS,
  title: WIDGET_TITLES.SYSTEM_STATUS,
  minWidth: 3,
  minHeight: 5,
  defaultWidth: 4,
  defaultHeight: 5,
};

export const WIDGET_SWAP_CURVES = {
  type: WIDGET_TYPES.SWAP_CURVES,
  title: WIDGET_TITLES.SWAP_CURVES,
  minWidth: 3,
  minHeight: 5,
  defaultWidth: 4,
  defaultHeight: 5,
};

export const WIDGET_GOVI_CURVES = {
  type: WIDGET_TYPES.GOVI_CURVES,
  title: WIDGET_TITLES.GOVI_CURVES,
  minWidth: 3,
  minHeight: 5,
  defaultWidth: 4,
  defaultHeight: 5,
};

export const WIDGET_KURS = {
  type: WIDGET_TYPES.KURS,
  title: WIDGET_TITLES.KURS,
  minWidth: 3,
  minHeight: 5,
  defaultWidth: 4,
  defaultHeight: 5,
};

export const WIDGET_GRUPPE = {
  type: WIDGET_TYPES.GRUPPE,
  title: WIDGET_TITLES.GRUPPE,
  minWidth: 3,
  minHeight: 5,
  defaultWidth: 4,
  defaultHeight: 5,
};

export const WIDGET_TX_DATENBAUM = {
  type: WIDGET_TYPES.TX_DATENBAUM,
  title: WIDGET_TITLES.TX_DATENBAUM,
  minWidth: 3,
  minHeight: 4,
  defaultWidth: 4,
  defaultHeight: 4,
};

export const WIDGET_SQ_DATENBAUM = {
  type: WIDGET_TYPES.SQ_DATENBAUM,
  title: WIDGET_TITLES.SQ_DATENBAUM,
  minWidth: 3,
  minHeight: 4,
  defaultWidth: 4,
  defaultHeight: 4,
};

export const WIDGET_RSX_BOTTOM_UP = {
  type: WIDGET_TYPES.RSX_BOTTOM_UP,
  title: WIDGET_TITLES.RSX_BOTTOM_UP,
  minWidth: 3,
  minHeight: 3,
  defaultWidth: 4,
  defaultHeight: 3,
};

export const WIDGET_CHECK_SCORE_CARD = {
  type: WIDGET_TYPES.CHECK_SCORE_CARD,
  title: WIDGET_TITLES.CHECK_SCORE_CARD,
  minWidth: 10,
  minHeight: 11,
  defaultWidth: 12,
  defaultHeight: 11,
};

export const WIDGET_SCHEDULING = {
  type: WIDGET_TYPES.SCHEDULING,
  title: WIDGET_TITLES.SCHEDULING,
  minWidth: 3,
  minHeight: 11,
  defaultWidth: 4,
  defaultHeight: 11,
};

export const WIDGET_WITH_SUB_ITEMS = 'WIDGET_WITH_SUB_ITEMS';

export const TOP_BLOCK_DEFAULT_WIDGETS = [
  WIDGET_SYSTEM_STATUS,
  WIDGET_SWAP_CURVES,
  WIDGET_GOVI_CURVES,
  WIDGET_KURS,
  WIDGET_GRUPPE,
];

export const LEFT_BLOCK_DEFAULT_WIDGETS = [
  WIDGET_TX_DATENBAUM,
  WIDGET_SQ_DATENBAUM,
  WIDGET_RSX_BOTTOM_UP,
];

export const CENTER_BOTTOM_DEFAULT_WIDGETS = [
  WIDGET_CHECK_SCORE_CARD,
];

export const RIGHT_BLOCK_DEFAULT_WIDGETS = [
  WIDGET_SCHEDULING,
];
