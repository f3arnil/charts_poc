import { connect } from 'react-redux';

import {
  getSystemStatusState,
  getSystemStatusEvents,
  beginRequestSystemStatus,
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
  },
)(SystemStatusWidget);
