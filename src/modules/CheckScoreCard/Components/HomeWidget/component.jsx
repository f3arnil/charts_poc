import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { STATUSES } from '@/constants/redux';

const WIDGET_TITLE = 'Check score card';

class CheckScoreCardWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const {
      status,
      data,
    } = this.props;

    return (
      <div className="check-score-card" style={{ backgroundColor: '#948d8d', overflow: 'hidden' }}>
        <div className="title">
          <p>{WIDGET_TITLE}</p>
        </div>
        <p>{ `${WIDGET_TITLE} state is: ${status}.` }</p>
        <p>{ `Events length is: ${data.length}.` }</p>
      </div>
    );
  }
}

CheckScoreCardWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  data: [],
};

CheckScoreCardWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CheckScoreCardWidget;
