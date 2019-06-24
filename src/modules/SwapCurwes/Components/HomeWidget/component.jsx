import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import Table from '@/components/blocks/Table';

import SwapCurwes from './styledComponents';
import headerConfig from './tableConfig';

class SwapCurwesWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { status, data } = this.props;

    if (status !== STATUSES.IDLE) {
      return ('Loading...');
    }
    return (
      <SwapCurwes>
        <Table>
          <Table.Body data={data} header={headerConfig} />
        </Table>
      </SwapCurwes>
    );
  }
}

SwapCurwesWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  data: [],
};

SwapCurwesWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default SwapCurwesWidget;
