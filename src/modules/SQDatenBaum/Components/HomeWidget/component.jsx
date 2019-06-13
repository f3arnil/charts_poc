import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';

const WIDGET_TITLE = 'SQ Daten Baum';

class SQDatenBaumWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  componentWillUnmount() {
    const { clearData } = this.props;

    clearData();
  }

  render() {
    const { status, values, tree } = this.props;

    return (
      <div className="system-status-block">
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <p>{ `${WIDGET_TITLE} status state is: ${status}.` }</p>
        <p>{ `Data values is: ${JSON.stringify(values)}.` }</p>
        <p>{ `Data tree is: ${JSON.stringify(tree)}.` }</p>
      </div>
    );
  }
}

SQDatenBaumWidget.defaultProps = {
  getData: noop,
  clearData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
  tree: [],
};

SQDatenBaumWidget.propTypes = {
  getData: PropTypes.func,
  clearData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
  tree: PropTypes.arrayOf(PropTypes.number),
};

export default SQDatenBaumWidget;
