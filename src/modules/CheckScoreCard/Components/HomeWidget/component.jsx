import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import Table from '@/components/blocks/Table';
import Loader from '@/components/blocks/Loader';

import headerConfig from './tableConfig';

class CheckScoreCardWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { status, data } = this.props;

    if (status !== STATUSES.IDLE) {
      return (<Loader />);
    }
    return (
      <div className="widget check-scorecard-widget">
        <Table>
          <Table.Header header={headerConfig} />
          <Table.Body data={data} header={headerConfig} />
        </Table>
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
