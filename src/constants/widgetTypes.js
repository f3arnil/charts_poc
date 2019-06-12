export const WIDGET_TYPES = {
  SYSTEM_STATUS: 'SYSTEM_STATUS',
  SWAP_CURWES: 'SWAP_CURWES',
  SQ_DATENBAUM: 'SQ_DATENBAUM',
  TX_DATENBAUM: 'TX_DATENBAUM',
  SCHEDULING: 'SCHEDULING',
  RSX_BOTTOM_UP: 'RSX_BOTTOM_UP',
  KURS: 'KURS',
  GRUPPE: 'GRUPPE',
  GOVI_CURWES: 'GOVI_CURWES',
  CHECK_SCORE_CARD: 'CHECK_SCORE_CARD',
};

export const LEFT_BLOCK_DEFAULT_WIDGETS = [
  WIDGET_TYPES.SYSTEM_STATUS,
  WIDGET_TYPES.TX_DATENBAUM,
  WIDGET_TYPES.SQ_DATENBAUM,
  WIDGET_TYPES.RSX_BOTTOM_UP,
];

export const CENTER_BLOCK_DEFAULT_WIDGETS = [
  WIDGET_TYPES.SWAP_CURWES,
  WIDGET_TYPES.GOVI_CURWES,
  WIDGET_TYPES.KURS,
  WIDGET_TYPES.CHECK_SCORE_CARD,
];

export const RIGHT_BLOCK_DEFAULT_WIDGETS = [
  WIDGET_TYPES.GRUPPE,
  WIDGET_TYPES.SCHEDULING,
];
