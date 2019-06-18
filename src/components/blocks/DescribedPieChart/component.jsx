import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PieChart from '@/components/blocks/PieChart';

import {
  GRUPPE_COLORS_BY_INDEX,
  GRUPPE_CLASSES_BY_INDEX,
} from '@/constants/charts';

class DescribedPieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartProps: {
        className: 'pie-chart',
        totalValue: this.getAllValueSumm(),
        lineWidth: 40,
      },
      data: this.getDataForPieChart(),
    };
  }

  getDataForPieChart = () => {
    const { data } = this.props;

    return data.map((row, index) => ({
      ...row,
      color: GRUPPE_COLORS_BY_INDEX[index],
    }));
  }

  getAllValueSumm = () => {
    const { data } = this.props;

    return data.reduce((acc, row) => acc + Math.abs(row.value), 0);
  }

  renderChartDescription = () => {
    const { data } = this.props;

    return (
      <div className="chart-description">
        {data.map((row, index) => {
          const descriptionClassNameCN = cn(
            'value-description',
            GRUPPE_CLASSES_BY_INDEX[index],
            {
              first: index === 0,
            },
          );
          const value = row.value - row.prevValue;
          const valueString = `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
          return (
            <div key={row.name} className={descriptionClassNameCN}>
              <span className="value">
                {valueString}
              </span>
              <span className="name">
                {row.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const { title } = this.props;
    const { chartProps, data } = this.state;
    return (
      <div className="described-pie-chart">
        <PieChart
          data={data}
          chartProps={chartProps}
        />
        <h2>{title}</h2>
        {this.renderChartDescription()}
      </div>
    );
  }
}

DescribedPieChart.defaultProps = {
  title: '',
  data: [],
};
DescribedPieChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DescribedPieChart;
