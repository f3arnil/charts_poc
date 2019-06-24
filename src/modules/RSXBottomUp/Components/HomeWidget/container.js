import { connect } from 'react-redux';

import {
  getRSXBottomUpState,
  getCustomRSXBottomUpValues,
  beginRequestRSXBottomUp,
} from '../../redux';
import RSXBottomUpWidget from './component';

export default connect(
  (state) => {
    const status = getRSXBottomUpState(state);
    const values = getCustomRSXBottomUpValues(state);

    return {
      status,
      values,
    };
  },
  {
    getData: beginRequestRSXBottomUp,
  },
)(RSXBottomUpWidget);
