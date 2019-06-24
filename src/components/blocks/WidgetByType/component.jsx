import React from 'react';
import { WIDGET_TYPES } from '@/constants/widgets';

import { SystemStatusWidget } from '@/modules/SystemStatus/Components';
import { SwapCurwesWidget } from '@/modules/SwapCurwes/Components';
import { SQDatenBaumWidget } from '@/modules/SQDatenBaum/Components';
import { TXDatenBaumWidget } from '@/modules/TXDatenBaum/Components';
import { SchedulingWidget } from '@/modules/Scheduling/Components';
import { RSXBottomUpWidget } from '@/modules/RSXBottomUp/Components';
import { KursWidget } from '@/modules/Kurs/Components';
import { GruppeWidget } from '@/modules/Gruppe/Components';
import { GoviCurwesWidget } from '@/modules/GoviCurwes/Components';
import { CheckScoreCardWidget } from '@/modules/CheckScoreCard/Components';

const WidgetByType = (props) => {
  const { type } = props;

  switch (type) {
    case WIDGET_TYPES.SYSTEM_STATUS:
      return <SystemStatusWidget />;
    case WIDGET_TYPES.SWAP_CURVES:
      return <SwapCurwesWidget />;
    case WIDGET_TYPES.SQ_DATENBAUM:
      return <SQDatenBaumWidget />;
    case WIDGET_TYPES.TX_DATENBAUM:
      return <TXDatenBaumWidget />;
    case WIDGET_TYPES.SCHEDULING:
      return <SchedulingWidget />;
    case WIDGET_TYPES.RSX_BOTTOM_UP:
      return <RSXBottomUpWidget />;
    case WIDGET_TYPES.KURS:
      return <KursWidget />;
    case WIDGET_TYPES.GRUPPE:
      return <GruppeWidget />;
    case WIDGET_TYPES.GOVI_CURVES:
      return <GoviCurwesWidget />;
    case WIDGET_TYPES.CHECK_SCORE_CARD:
      return <CheckScoreCardWidget />;
    default: return null;
  }
};

export default React.memo(WidgetByType);
