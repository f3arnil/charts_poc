import { connect } from 'react-redux';

import {
  getGoviCurwesState,
  getCustomGoviCurwesData,
  beginRequestGoviCurwes,
} from '../../redux';
import GoviCurwesWidget from './component';

export default connect(
  (state) => {
    const status = getGoviCurwesState(state);
    const data = getCustomGoviCurwesData(state);

    return {
      status,
      data,
    };
  },
  {
    getData: beginRequestGoviCurwes,
  },
)(GoviCurwesWidget);
