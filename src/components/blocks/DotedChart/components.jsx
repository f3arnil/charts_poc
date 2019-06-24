import React from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';

import {
  DotedChartStyled,
  Dots,
  Dot,
  CircleWrapper,
  Circle,
  Value,
  Title,
  NamesRow,
  Name,
} from './styledComponents';

const MIN_DOT_SIZE = 2;
const MAX_DOT_SIZE = 24;
const DOT_SIZES_DIF = MAX_DOT_SIZE - MIN_DOT_SIZE;

class DotedChart extends React.PureComponent {
  getDotSizes(value) {
    const absValue = Math.abs(value);
    const { maxValue } = this.props;

    const size = ((absValue / maxValue) * DOT_SIZES_DIF) + MIN_DOT_SIZE;
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  }

  static renderName(value, index) {
    const { name } = value;
    const key = `name__${name}--${value.value}--${index}`;

    return (
      <Name key={key}>{name}</Name>
    );
  }

  renderDotFromNumber = (value, index) => {
    const { withoutDots } = this.props;
    const isPositive = value > 0;
    const key = `number-dot__${value}--${index}`;
    const dotSizes = !withoutDots ? this.getDotSizes(value) : null;

    return (
      <Dot key={key}>
        {!withoutDots && (
          <CircleWrapper>
            <Circle
              dark={!isPositive}
              sizes={dotSizes}
            />
          </CircleWrapper>
        )}
        <Value>{value}</Value>
      </Dot>
    );
  }

  renderDotElement = (item, index) => {
    if (isObject(item)) {
      return this.renderDotFromNumber(item.value, index);
    }

    return this.renderDotFromNumber(item, index);
  }

  render() {
    const { data, title, dotsWithName } = this.props;
    return (
      <DotedChartStyled titled={!!title}>
        {title && (
          <Title>{title}</Title>
        )}
        <Dots>
          {data.map(this.renderDotElement)}
        </Dots>
        {dotsWithName && (
          <NamesRow>
            {data.map(DotedChart.renderName)}
          </NamesRow>
        )}
      </DotedChartStyled>
    );
  }
}

DotedChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ])),
  withoutDots: PropTypes.bool,
  dotsWithName: PropTypes.bool,
  title: PropTypes.string,
  maxValue: PropTypes.number,
};

DotedChart.defaultProps = {
  data: [],
  withoutDots: false,
  dotsWithName: false,
  title: '',
  maxValue: 0,
};

export default DotedChart;
