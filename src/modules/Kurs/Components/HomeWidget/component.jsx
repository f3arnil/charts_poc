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
    const {
      kurs,
      maxValue,
      allocations,
      kursTitle,
      allocationsTitle,
    } = this.props;

    return (
      <div className="widget kurs-allokationsfaktor-widget">
        <DotedChart
          maxValue={maxValue}
          title={kursTitle}
          data={kurs}
          dotsWithName
        />
        <DotedChart
          maxValue={maxValue}
          title={allocationsTitle}
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
  kursTitle: '',
  allocationsTitle: '',
  kurs: {},
  allocations: {},
  maxValue: 0,
};

KursWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  kursTitle: PropTypes.string,
  allocationsTitle: PropTypes.string,
  kurs: PropTypes.arrayOf(PropTypes.object),
  allocations: PropTypes.arrayOf(PropTypes.object),
  maxValue: PropTypes.number,
};

export default KursWidget;
