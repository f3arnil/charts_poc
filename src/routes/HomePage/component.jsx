import React from 'react';
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

const HomePage = () => {
  return (
    <>
      <h1>Hello motherfucker!!</h1>
      <SystemStatusWidget />
      <SwapCurwesWidget />
      <SQDatenBaumWidget />
      <TXDatenBaumWidget />
      <SchedulingWidget />
      <RSXBottomUpWidget />
      <KursWidget />
      <GruppeWidget />
      <GoviCurwesWidget />
      <CheckScoreCardWidget />
    </>
  );
};

export default HomePage;
