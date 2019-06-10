import { connect } from 'react-redux';

import {
  getRSXBottomUpState,
  getRSXBottomUpValues,
  beginRequestRSXBottomUp,
  beginClearRSXBottomUp,
} from '../../redux';
import RSXBottomUpWidget from './component';

export default connect(
  (state) => {
    const status = getRSXBottomUpState(state);
    const values = getRSXBottomUpValues(state);

    return {
      status,
      values,
    };
  },
  {
    getData: beginRequestRSXBottomUp,
    clearData: beginClearRSXBottomUp,
  },
)(RSXBottomUpWidget);
