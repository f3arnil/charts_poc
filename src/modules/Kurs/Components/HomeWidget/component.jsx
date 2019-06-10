import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';
// title: 'Kurs wahrung',
// title: 'Allocations factor',
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
    const { status, kurs, allocations } = this.props;

    return (
      <div className="system-status-block">
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <p>{ `${WIDGET_TITLE} status state is: ${status}.` }</p>
        <p>{ `Kurs list is: ${JSON.stringify(kurs)}.` }</p>
        <p>{ `Allocations list is: ${JSON.stringify(allocations)}.` }</p>
      </div>
    );
  }
}

KursWidget.defaultProps = {
  getData: noop,
  clearData: noop,
  status: STATUSES.NOT_REQUESTED,
  kurs: {},
  allocations: {},
};

KursWidget.propTypes = {
  getData: PropTypes.func,
  clearData: PropTypes.func,
  status: PropTypes.string,
  kurs: PropTypes.arrayOf(PropTypes.object),
  allocations: PropTypes.arrayOf(PropTypes.object),
};

export default KursWidget;
