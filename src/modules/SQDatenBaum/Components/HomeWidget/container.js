import { connect } from 'react-redux';

import {
  getSQDatenBaumState,
  getSQDatenBaumValues,
  getSQDatenBaumTree,
  beginRequestSQDatenBaum,
  beginClearSQDatenBaum,
} from '../../redux';

import SQDatenBaumWidget from './component';

export default connect(
  (state) => {
    const status = getSQDatenBaumState(state);
    const values = getSQDatenBaumValues(state);
    const tree = getSQDatenBaumTree(state);

    return {
      status,
      values,
      tree,
    };
  },
  {
    getData: beginRequestSQDatenBaum,
    clearData: beginClearSQDatenBaum,
  },
)(SQDatenBaumWidget);
