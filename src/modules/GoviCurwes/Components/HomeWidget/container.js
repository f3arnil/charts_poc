import { connect } from 'react-redux';

import {
  getGoviCurwesState,
  getGoviCurwesDataList,
  getGoviCurwesDataChange,
  beginRequestGoviCurwes,
  beginClearGoviCurwes,
} from '../../redux';
import GoviCurwesWidget from './component';

export default connect(
  (state) => {
    const status = getGoviCurwesState(state);
    const list = getGoviCurwesDataList(state);
    const change = getGoviCurwesDataChange(state);

    return {
      status,
      list,
      change,
    };
  },
  {
    getData: beginRequestGoviCurwes,
    clearData: beginClearGoviCurwes,
  },
)(GoviCurwesWidget);
