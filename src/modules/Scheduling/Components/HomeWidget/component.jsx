import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import styled from 'styled-components';

import { STATUSES } from '@/constants/redux';
import Table from '@/components/blocks/Table';
import Loader from '@/components/blocks/Loader';
import Widget from '@/components/styled/Widget';

import headerConfig from './tableConfig';

const Scheduling = styled(Widget)`
  td.name {
    width: 70px;
  }
`;

class SchedulingWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;
    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { status, events } = this.props;

    if (status !== STATUSES.IDLE) {
      return (<Loader />);
    }
    return (
      <Scheduling>
        <Table>
          <Table.Header header={headerConfig} lightHeader />
          <Table.Body data={events} header={headerConfig} />
        </Table>
      </Scheduling>
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
