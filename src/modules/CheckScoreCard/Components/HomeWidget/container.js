import { connect } from 'react-redux';

import {
  getCheckScoreCardDataState,
  getCheckScoreCardData,
  beginRequestCheckScoreCardData,
  beginClearCheckScoreCardData,
} from '../../redux';
import CheckScoreCardWidget from './component';

export default connect(
  (state) => {
    const status = getCheckScoreCardDataState(state);
    const data = getCheckScoreCardData(state);

    return {
      status,
      data,
    };
  },
  {
    getData: beginRequestCheckScoreCardData,
    clearData: beginClearCheckScoreCardData,
  },
)(CheckScoreCardWidget);
