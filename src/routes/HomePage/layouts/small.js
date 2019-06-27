import {
  WIDGET_SYSTEM_STATUS,
  WIDGET_SWAP_CURVES,
  WIDGET_GOVI_CURVES,
  WIDGET_KURS,
  WIDGET_GRUPPE,
  WIDGET_TX_DATENBAUM,
  WIDGET_SQ_DATENBAUM,
  WIDGET_RSX_BOTTOM_UP,
  WIDGET_CHECK_SCORE_CARD,
  WIDGET_SCHEDULING,
} from '@/constants/widgets';
import generateWidgetForGrid from '@/helpers/generateWidgetForGrid';

const items = [
  generateWidgetForGrid({
    widget: WIDGET_SYSTEM_STATUS,
    x: 0,
    y: 0,
  }),
  generateWidgetForGrid({
    widget: WIDGET_SWAP_CURVES,
    x: 0,
    y: 5,
  }),
  generateWidgetForGrid({
    widget: WIDGET_GOVI_CURVES,
    x: 0,
    y: 10,
  }),
  generateWidgetForGrid({
    widget: WIDGET_KURS,
    x: 0,
    y: 15,
  }),
  generateWidgetForGrid({
    widget: WIDGET_CHECK_SCORE_CARD,
    x: 0,
    y: 20,
  }),
  generateWidgetForGrid({
    widget: WIDGET_GRUPPE,
    x: 0,
    y: 31,
  }),
  generateWidgetForGrid({
    widget: WIDGET_SCHEDULING,
    x: 0,
    y: 36,
  }),
  generateWidgetForGrid({
    widget: WIDGET_TX_DATENBAUM,
    x: 0,
    y: 47,
  }),
  generateWidgetForGrid({
    widget: WIDGET_SQ_DATENBAUM,
    x: 0,
    y: 52,
  }),
  generateWidgetForGrid({
    widget: WIDGET_RSX_BOTTOM_UP,
    x: 0,
    y: 57,
  }),
];

export default items;
