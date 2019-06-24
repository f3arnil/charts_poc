import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import DescribedPieChart from '@/components/blocks/DescribedPieChart';

import GruppeWidgetStyled from './styledComponents';

class GruppeWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <GruppeWidgetStyled>
        {data.map((chart, index) => {
          const key = `described-pie-chart--${index}`;
          return (
            <DescribedPieChart key={key} {...chart} />
          );
        })}
      </GruppeWidgetStyled>
    );
  }
}

GruppeWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  data: [],
};

GruppeWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GruppeWidget;
