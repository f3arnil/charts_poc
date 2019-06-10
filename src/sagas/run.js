import { all } from 'redux-saga/effects';
import { root as systemStatusSaga } from '@/modules/SystemStatus/redux/saga';
import { root as swapCurwesSaga } from '@/modules/SwapCurwes/redux/saga';
import { root as SQDatenBaumSaga } from '@/modules/SQDatenBaum/redux/saga';
import { root as TXDatenBaumSaga } from '@/modules/TXDatenBaum/redux/saga';
import { root as SchedulingSaga } from '@/modules/Scheduling/redux/saga';
import { root as RSXBottomUpSaga } from '@/modules/RSXBottomUp/redux/saga';
import { root as KursSaga } from '@/modules/Kurs/redux/saga';
import { root as GruppeSaga } from '@/modules/Gruppe/redux/saga';
import { root as goviCurwesSaga } from '@/modules/GoviCurwes/redux/saga';
import { root as checkScoreCardSaga } from '@/modules/CheckScoreCard/redux/saga';

function* root() {
  yield all([
    systemStatusSaga(),
    swapCurwesSaga(),
    SQDatenBaumSaga(),
    TXDatenBaumSaga(),
    SchedulingSaga(),
    RSXBottomUpSaga(),
    KursSaga(),
    GruppeSaga(),
    goviCurwesSaga(),
    checkScoreCardSaga(),
  ]);
}

export default root;
