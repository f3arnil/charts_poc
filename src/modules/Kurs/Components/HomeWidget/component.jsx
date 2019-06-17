import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import DotedChart from '@/components/blocks/DotedChart';

class KursWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { kurs, allocations } = this.props;

    return (
      <div className="kurs-allokationsfaktor-block">
        <DotedChart
          title="KURS-WÄHRUNG"
          data={kurs}
          dotsWithName
        />
        <DotedChart
          title="ALLOKATIONSFAKTOR"
          data={allocations}
          dotsWithName
        />
      </div>
    );
  }
}

KursWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  kurs: {},
  allocations: {},
};

KursWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  kurs: PropTypes.arrayOf(PropTypes.object),
  allocations: PropTypes.arrayOf(PropTypes.object),
};

export default KursWidget;
