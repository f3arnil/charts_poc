import { connect } from 'react-redux';

import {
  getSystemStatusState,
  getSystemStatusEvents,
  beginRequestSystemStatus,
  beginClearSystemStatus,
} from '../../redux';
import SystemStatusWidget from './component';

export default connect(
  (state) => {
    const status = getSystemStatusState(state);
    const events = getSystemStatusEvents(state);

    return {
      status,
      events,
    };
  },
  {
    getData: beginRequestSystemStatus,
    clearData: beginClearSystemStatus,
  },
)(SystemStatusWidget);
