import { connect } from 'react-redux';

import {
  getSwapCurwesState,
  getCustomSwapCurwesData,
  beginRequestSwapCurwes,
} from '../../redux';
import SwapCurwesWidget from './component';

export default connect(
  (state) => {
    const status = getSwapCurwesState(state);
    const data = getCustomSwapCurwesData(state);

    return {
      status,
      data,
    };
  },
  {
    getData: beginRequestSwapCurwes,
  },
)(SwapCurwesWidget);
