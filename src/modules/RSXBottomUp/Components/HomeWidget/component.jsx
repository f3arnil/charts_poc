import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';

const WIDGET_TITLE = 'RSX Bottom Up';

class RSXBottomUpWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { status, values } = this.props;

    return (
      <div className="system-status-block">
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <p>{ `${WIDGET_TITLE} status state is: ${status}.` }</p>
        <p>{ `Data values is: ${JSON.stringify(values)}.` }</p>
      </div>
    );
  }
}

RSXBottomUpWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
};

RSXBottomUpWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default RSXBottomUpWidget;
