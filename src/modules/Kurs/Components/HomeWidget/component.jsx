import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';

const WIDGET_TITLE = 'Kurs wahrung & Allocations factor';

class KursWidget extends React.PureComponent {
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
    const { status, data } = this.props;

    return (
      <div className="system-status-block">
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <p>{ `${WIDGET_TITLE} status state is: ${status}.` }</p>
        <p>{ `Data list is: ${JSON.stringify(data)}.` }</p>
      </div>
    );
  }
}

KursWidget.defaultProps = {
  getData: noop,
  clearData: noop,
  status: STATUSES.NOT_REQUESTED,
  data: [],
};

KursWidget.propTypes = {
  getData: PropTypes.func,
  clearData: PropTypes.func,
  status: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default KursWidget;
