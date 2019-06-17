import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import Table from '@/components/blocks/Table';
import StatusDot from '@/components/blocks/StatusDot';
import PlanBlock from '@/components/blocks/PlanBlock';

import headerConfig from './tableConfig';

class SchedulingWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;
    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  getDataForTable() {
    const { events } = this.props;

    const dataArrayForRedner = events
      .map(row => ({
        plan: <PlanBlock {...row} />,
        status: <StatusDot color={row.status} />,
      }));

    return dataArrayForRedner;
  }

  render() {
    const { status } = this.props;

    if (status !== STATUSES.IDLE) {
      return ('Loading...');
    }
    return (
      <div className="system-status-block">
        <Table
          data={this.getDataForTable()}
          header={headerConfig}
        />
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
