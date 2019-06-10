import { connect } from 'react-redux';

import {
  getTXDatenBaumState,
  getTXDatenBaumValues,
  getTXDatenBaumTree,
  beginRequestTXDatenBaum,
  beginClearTXDatenBaum,
} from '../../redux';
import TXDatenBaumWidget from './component';

export default connect(
  (state) => {
    const status = getTXDatenBaumState(state);
    const values = getTXDatenBaumValues(state);
    const tree = getTXDatenBaumTree(state);

    return {
      status,
      values,
      tree,
    };
  },
  {
    getData: beginRequestTXDatenBaum,
    clearData: beginClearTXDatenBaum,
  },
)(TXDatenBaumWidget);
