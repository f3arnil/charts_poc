import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import { getFormatedDate } from '@/helpers/formaters';
import Table from '@/components/blocks/Table';
import StatusDot from '@/components/blocks/StatusDot';

import headerConfig from './tableConfig';

class CheckScoreCardWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  getDataForTable() {
    const { data } = this.props;

    const dataArrayForRedner = data
      .map(row => ({
        ...row,
        status: <StatusDot color={row.status} />,
        date: getFormatedDate(row.date),
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
