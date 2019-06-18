import { connect } from 'react-redux';

import {
  getGoviCurwesState,
  getGoviCurwesDataList,
  getGoviCurwesDataChange,
  getMaxValue,
  beginRequestGoviCurwes,
} from '../../redux';
import GoviCurwesWidget from './component';

export default connect(
  (state) => {
    const status = getGoviCurwesState(state);
    const list = getGoviCurwesDataList(state);
    const change = getGoviCurwesDataChange(state);
    const maxValue = getMaxValue(state);

    return {
      status,
      list,
      change,
      maxValue,
    };
  },
  {
    getData: beginRequestGoviCurwes,
  },
)(GoviCurwesWidget);
