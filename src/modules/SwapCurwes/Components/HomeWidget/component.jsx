import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import concat from 'lodash/concat';

import { STATUSES } from '@/constants/redux';
import Table from '@/components/blocks/Table';
import DotedChart from '@/components/blocks/DotedChart';

import headerConfig from './tableConfig';

class SwapCurwesWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  getDataForTable() {
    const { list, change, maxValue } = this.props;

    const dataArray = concat([], list, [{
      name: <span className="small-text">Change in BP</span>,
      data: change,
    }]);

    const dataArrayForRedner = dataArray
      .map((row, index) => ({
        ...row,
        data: (
          <DotedChart
            withoutDots={index === dataArray.length - 1}
            maxValue={maxValue}
            data={row.data}
          />),
      }));

    return dataArrayForRedner;
  }

  render() {
    const { status } = this.props;

    if (status !== STATUSES.IDLE) {
      return ('Loading...');
    }
    return (
      <div className="widget swap-curves-widget">
        <Table
          showHeader={false}
          data={this.getDataForTable()}
          header={headerConfig}
        />
      </div>
    );
  }
}

SwapCurwesWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  list: [],
  change: [],
  maxValue: 0,
};

SwapCurwesWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  change: PropTypes.arrayOf(PropTypes.number),
  maxValue: PropTypes.number,
};

export default SwapCurwesWidget;
