import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import {
  CHART_COLORS_BY_INDEX,
  CHART_CLASSES_BY_INDEX,
} from '@/constants/charts';
import ChartsTitle from '@/components/blocks/ChartsTitle';
import treeIcon from '@/assets/icons/tree.svg';
import treeImage from '@/assets/tree.jpg';

const WIDGET_TITLE = 'TX';

class TXDatenBaumWidget extends React.PureComponent {
  constructor(props) {
    super(props);

    this.getChartTitleData = this.getChartTitleData.bind(this);
  }

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
      <div className="system-status-block">
        <ChartsTitle
          className="text__green"
          iconClassName="bg__green"
          icon={treeIcon}
          title={WIDGET_TITLE}
          charts={this.getChartTitleData()}
        />
        {/* TODO: change to tree generation  */}
        <img
          style={{ width: '100%' }}
          alt="Tree"
          src={treeImage}
        />
      </div>
    );
  }
}

TXDatenBaumWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
  // tree: [],
};

TXDatenBaumWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
  // tree: PropTypes.arrayOf(PropTypes.number),
};

export default TXDatenBaumWidget;
