import { connect } from 'react-redux';

import {
  getCheckScoreCardDataState,
  getCustomCheckScoreCardData,
  beginRequestCheckScoreCardData,
} from '../../redux';
import CheckScoreCardWidget from './component';

export default connect(
  (state) => {
    const status = getCheckScoreCardDataState(state);
    const data = getCustomCheckScoreCardData(state);

    return {
      status,
      data,
    };
  },
  {
    getData: beginRequestCheckScoreCardData,
  },
)(CheckScoreCardWidget);
