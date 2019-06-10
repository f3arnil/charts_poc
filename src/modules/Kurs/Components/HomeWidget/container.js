import { connect } from 'react-redux';

import {
  getKursState,
  getKursData,
  beginRequestKurs,
  beginClearKurs,
} from '../../redux';
import KursWidget from './component';

export default connect(
  (state) => {
    const status = getKursState(state);
    const data = getKursData(state);

    return {
      status,
      data,
    };
  },
  {
    getData: beginRequestKurs,
    clearData: beginClearKurs,
  },
)(KursWidget);
