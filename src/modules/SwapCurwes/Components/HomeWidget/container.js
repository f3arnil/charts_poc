import { connect } from 'react-redux';

import {
  getSwapCurwesState,
  getSwapCurwesDataList,
  getSwapCurwesDataChange,
  getMaxValue,
  beginRequestSwapCurwes,
} from '../../redux';
import SwapCurwesWidget from './component';

export default connect(
  (state) => {
    const status = getSwapCurwesState(state);
    const list = getSwapCurwesDataList(state);
    const change = getSwapCurwesDataChange(state);
    const maxValue = getMaxValue(state);

    return {
      status,
      list,
      change,
      maxValue,
    };
  },
  {
    getData: beginRequestSwapCurwes,
  },
)(SwapCurwesWidget);
