import { connect } from 'react-redux';

import {
  getRSXBottomUpState,
  getRSXBottomUpValues,
  beginRequestRSXBottomUp,
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
  },
)(RSXBottomUpWidget);
