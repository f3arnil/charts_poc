import { connect } from 'react-redux';

import {
  getKursState,
  getAllocations,
  getKurs,
  getKursTitle,
  getAllocationsTitle,
  getMaxValue,
  beginRequestKurs,
} from '../../redux';
import KursWidget from './component';

export default connect(
  (state) => {
    const status = getKursState(state);
    const kurs = getKurs(state);
    const allocations = getAllocations(state);
    const kursTitle = getKursTitle(state);
    const allocationsTitle = getAllocationsTitle(state);
    const maxValue = getMaxValue(state);

    return {
      kursTitle,
      allocationsTitle,
      status,
      kurs,
      allocations,
      maxValue,
    };
  },
  {
    getData: beginRequestKurs,
  },
)(KursWidget);
