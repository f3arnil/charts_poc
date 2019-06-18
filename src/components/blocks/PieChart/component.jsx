import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

const DEFAULT_CHART_PROPS = {
  startAngle: -90,
  lengthWidth: -360,
  totalValue: 100,
  animate: true,
  lineWidth: 30,
  background: '#454545',
};

const PieChart = (props) => {
  const { data, chartProps } = props;
  const assignedChartProps = {
    ...DEFAULT_CHART_PROPS,
    ...chartProps,
  };
  return (
    <ReactMinimalPieChart
      data={data}
      {...assignedChartProps}
    />
  );
};

PieChart.defaultProps = {
  data: [],
  chartProps: {
    ...DEFAULT_CHART_PROPS,
  },
};

export default React.memo(PieChart);
