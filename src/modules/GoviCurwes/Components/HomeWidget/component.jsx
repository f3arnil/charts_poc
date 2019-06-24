import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import Table from '@/components/blocks/Table';

import GoviCurwes from './styledComponents';
import headerConfig from './tableConfig';

class GoviCurwesWidget extends React.PureComponent {
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
      <GoviCurwes>
        <Table>
          <Table.Body data={data} header={headerConfig} />
        </Table>
      </GoviCurwes>
    );
  }
}

GoviCurwesWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  data: [],
};

GoviCurwesWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GoviCurwesWidget;
