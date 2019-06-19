import { connect } from 'react-redux';

import {
  getGruppeState,
  getCustomGruppeData,
  beginRequestGruppe,
  beginClearGruppe,
} from '../../redux';
import GruppeWidget from './component';

export default connect(
  (state) => {
    const status = getGruppeState(state);
    const data = getCustomGruppeData(state);

    return {
      status,
      data,
    };
  },
  {
    getData: beginRequestGruppe,
    clearData: beginClearGruppe,
  },
)(GruppeWidget);
