import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

const DEFAULT_CHART_PROPS = {
  startAngle: -90,
  lengthWidth: -360,
  totalValue: 100,
  lineWidth: 30,
  background: '#454545',
};

const PieChart = (props) => {
  const { data, className, chartProps } = props;
  const assignedChartProps = {
    ...DEFAULT_CHART_PROPS,
    ...chartProps,
  };
  return (
    <ReactMinimalPieChart
      className={className}
      data={data}
      {...assignedChartProps}
    />
  );
};

PieChart.defaultProps = {
  data: [],
  className: '',
  chartProps: {
    ...DEFAULT_CHART_PROPS,
  },
};

export default React.memo(PieChart);
