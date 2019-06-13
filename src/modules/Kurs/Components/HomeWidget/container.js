import { connect } from 'react-redux';

import {
  getKursState,
  getAllocations,
  getKurs,
  beginRequestKurs,
} from '../../redux';
import KursWidget from './component';

export default connect(
  (state) => {
    const status = getKursState(state);
    const kurs = getKurs(state);
    const allocations = getAllocations(state);

    return {
      status,
      kurs,
      allocations,
    };
  },
  {
    getData: beginRequestKurs,
  },
)(KursWidget);
