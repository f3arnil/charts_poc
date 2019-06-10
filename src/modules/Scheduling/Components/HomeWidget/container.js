import { connect } from 'react-redux';

import {
  getSchedulingDataState,
  getSchedulingDataEvents,
  beginRequestSchedulingData,
  beginClearSchedulingData,
} from '../../redux';
import SchedulingWidget from './component';

export default connect(
  (state) => {
    const status = getSchedulingDataState(state);
    const events = getSchedulingDataEvents(state);

    return {
      status,
      events,
    };
  },
  {
    getData: beginRequestSchedulingData,
    clearData: beginClearSchedulingData,
  },
)(SchedulingWidget);
