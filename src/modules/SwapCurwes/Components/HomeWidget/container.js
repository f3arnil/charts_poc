import { connect } from 'react-redux';

import {
  getSwapCurwesState,
  getSwapCurwesDataList,
  getSwapCurwesDataChange,
  beginRequestSwapCurwes,
  beginClearSwapCurwes,
} from '../../redux';
import SwapCurwesWidget from './component';

export default connect(
  (state) => {
    const status = getSwapCurwesState(state);
    const list = getSwapCurwesDataList(state);
    const change = getSwapCurwesDataChange(state);

    return {
      status,
      list,
      change,
    };
  },
  {
    getData: beginRequestSwapCurwes,
    clearData: beginClearSwapCurwes,
  },
)(SwapCurwesWidget);
