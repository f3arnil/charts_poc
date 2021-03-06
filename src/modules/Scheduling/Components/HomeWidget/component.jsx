import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';

const WIDGET_TITLE = 'Scheduling';

class SchedulingWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;
    // console.warn(status);
    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  // componentWillUnmount() {
  //   const { clearData } = this.props;

  //   clearData();
  // }

  render() {
    const { status, events } = this.props;
    // console.warn(status);
    return (
      <div className="system-status-block">
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <div className="content">
          <p>{ `${WIDGET_TITLE} state is: ${status}.` }</p>
          <p>{ `Events length is: ${events.length}.` }</p>
        </div>
      </div>
    );
  }
}

SchedulingWidget.defaultProps = {
  getData: noop,
  // clearData: noop,
  status: STATUSES.NOT_REQUESTED,
  events: [],
};

SchedulingWidget.propTypes = {
  getData: PropTypes.func,
  // clearData: PropTypes.func,
  status: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.object),
};

export default SchedulingWidget;
