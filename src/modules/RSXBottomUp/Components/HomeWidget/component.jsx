import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import {
  CHART_COLORS_BY_INDEX,
  CHART_CLASSES_BY_INDEX,
} from '@/constants/charts';
import ChartsTitle from '@/components/blocks/ChartsTitle';
import gridIcon from '@/assets/icons/grid.svg';

const WIDGET_TITLE = 'RSX';

class RSXBottomUpWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  getChartTitleData() {
    const { values } = this.props;

    return values.map((value, index) => ({
      values: [{
        ...value,
        color: CHART_COLORS_BY_INDEX[index],
      }],
      label: value.value,
      className: CHART_CLASSES_BY_INDEX[index],
    }));
  }

  render() {
    return (
      <div className="widget rsx-bottom-up-widget">
        <ChartsTitle
          className="text__red"
          iconClassName="bg__red"
          icon={gridIcon}
          title={WIDGET_TITLE}
          charts={this.getChartTitleData()}
        />
      </div>
    );
  }
}

RSXBottomUpWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
};

RSXBottomUpWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default RSXBottomUpWidget;
