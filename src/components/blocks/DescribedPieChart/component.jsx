import React from 'react';
import PropTypes from 'prop-types';
import memoize from 'lodash/memoize';

import {
  DescribedPieChartStyled,
  Title,
  PieChartStyled,
  ChartDescription,
  ValueDescription,
  Value,
  Name,
} from './styledComponents';

const DEFAULT_CHART_PROPS = {
  lineWidth: 40,
};

const DescribedPieChart = (props) => {
  const { data, totalValue, title } = props;

  const getChartProps = memoize(totalValueProp => ({
    ...DEFAULT_CHART_PROPS,
    totalValue: totalValueProp,
  }));

  const renderChartDescription = () => (
    <ChartDescription>
      {data.map((row, index) => (
        <ValueDescription
          key={row.name}
          color={row.textColor}
          first={index === 0}
        >
          <Value>
            {row.valueString}
          </Value>
          <Name>
            {row.name}
          </Name>
        </ValueDescription>
      ))}
    </ChartDescription>
  );

  return (
    <DescribedPieChartStyled>
      <PieChartStyled
        data={data}
        chartProps={getChartProps(totalValue)}
      />
      <Title>{title}</Title>
      {renderChartDescription()}
    </DescribedPieChartStyled>
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
