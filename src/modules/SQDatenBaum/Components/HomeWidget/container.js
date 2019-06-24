import { connect } from 'react-redux';

import {
  getSQDatenBaumState,
  getCustomSQDatenBaumValues,
  getSQDatenBaumTree,
  beginRequestSQDatenBaum,
} from '../../redux';

import SQDatenBaumWidget from './component';

export default connect(
  (state) => {
    const status = getSQDatenBaumState(state);
    const values = getCustomSQDatenBaumValues(state);
    const tree = getSQDatenBaumTree(state);

    return {
      status,
      values,
      tree,
    };
  },
  {
    getData: beginRequestSQDatenBaum,
  },
)(SQDatenBaumWidget);
