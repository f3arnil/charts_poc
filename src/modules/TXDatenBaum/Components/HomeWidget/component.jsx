import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import ChartsTitle from '@/components/blocks/ChartsTitle';
import Tree from '@/components/blocks/Tree';
import Loader from '@/components/blocks/Loader';
import treeIcon from '@/assets/icons/tree.svg';

const WIDGET_TITLE = 'TX';

class TXDatenBaumWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { values, status } = this.props;

    if (status !== STATUSES.IDLE) {
      return (<Loader />);
    }
    return (
      <div className="widget tx-daten-widget">
        <ChartsTitle
          color="green"
          icon={treeIcon}
          title={WIDGET_TITLE}
          charts={values}
        />
        <Tree />
      </div>
    );
  }
}

TXDatenBaumWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
  // tree: [],
};

TXDatenBaumWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
  // tree: PropTypes.arrayOf(PropTypes.number),
};

export default TXDatenBaumWidget;
