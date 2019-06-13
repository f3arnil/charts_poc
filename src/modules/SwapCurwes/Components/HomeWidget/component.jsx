import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';

const WIDGET_TITLE = 'Swap Curwes';

class SwapCurwesWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { status, list, change } = this.props;

    return (
      <div className="system-status-block">
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <p>{ `${WIDGET_TITLE} status state is: ${status}.` }</p>
        <p>{ `Data list is: ${JSON.stringify(list)}.` }</p>
        <p>{ `Data change is: ${JSON.stringify(change)}.` }</p>
      </div>
    );
  }
}

SwapCurwesWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  list: [],
  change: [],
};

SwapCurwesWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  change: PropTypes.arrayOf(PropTypes.number),
};

export default SwapCurwesWidget;
