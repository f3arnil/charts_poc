import React from 'react';
import PropTypes from 'prop-types';

import PieChart from '@/components/blocks/PieChart';

import {
  ChartsTitleStyled,
  IconWrapper,
  Title,
  TitleText,
  Charts,
  Chart,
  Label,
} from './styledComponents';

class ChartsTitle extends React.PureComponent {
  render() {
    const {
      color,
      charts,
      icon,
      title,
    } = this.props;
    return (
      <ChartsTitleStyled color={color}>
        <Title>
          <IconWrapper color={color}>
            {icon && (
              <img alt={title} src={icon} />
            )}
          </IconWrapper>
          <TitleText>{title}</TitleText>
        </Title>
        <Charts>
          {charts.map((chart, index) => {
            const chartKey = `${title}--chart-${chart.label}--${index}`;
            return (
              <Chart key={chartKey} color={chart.color}>
                <PieChart data={chart.values} />
                {chart.label && (
                  <Label>
                    {chart.label}
                  </Label>
                )}
              </Chart>
            );
          })}
        </Charts>
      </ChartsTitleStyled>
    );
  }
}

ChartsTitle.defaultProps = {
  color: '',
  icon: '',
  title: '',
  charts: [],
};

ChartsTitle.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  charts: PropTypes.arrayOf(PropTypes.object),
};

export default ChartsTitle;
