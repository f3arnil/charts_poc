import { connect } from 'react-redux';

import {
  getGruppeState,
  getGruppeData,
  beginRequestGruppe,
  beginClearGruppe,
} from '../../redux';
import GruppeWidget from './component';

export default connect(
  (state) => {
    const status = getGruppeState(state);
    const data = getGruppeData(state);

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
