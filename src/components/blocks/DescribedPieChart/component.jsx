import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import memoize from 'lodash/memoize';

import PieChart from '@/components/blocks/PieChart';

import { GRUPPE_CLASSES_BY_INDEX } from '@/constants/charts';

const DEFAULT_CHART_PROPS = {
  className: 'pie-chart',
  lineWidth: 40,
};

const DescribedPieChart = (props) => {
  const { data, totalValue, title } = props;

  const getChartProps = memoize(totalValueProp => ({
    ...DEFAULT_CHART_PROPS,
    totalValue: totalValueProp,
  }));

  const renderChartDescription = () => (
    <div className="chart-description">
      {data.map((row, index) => (
        <div
          key={row.name}
          className={cn(
            'value-description',
            GRUPPE_CLASSES_BY_INDEX[index],
            { first: index === 0 },
          )}
        >
          <span className="value">
            {row.valueString}
          </span>
          <span className="name">
            {row.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="described-pie-chart">
      <PieChart
        data={data}
        chartProps={getChartProps(totalValue)}
      />
      <h2>{title}</h2>
      {renderChartDescription()}
    </div>
  );
};

DescribedPieChart.defaultProps = {
  title: '',
  data: [],
  totalValue: 0,
};
DescribedPieChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  totalValue: PropTypes.number,
};

export default React.memo(DescribedPieChart);
