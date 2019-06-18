import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isObject from 'lodash/isObject';

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
      <span key={key} className="name">
        {name}
      </span>
    );
  }

  renderDotFromNumber = (value, index) => {
    const { withoutDots } = this.props;
    const isPositive = value > 0;
    const key = `number-dot__${value}--${index}`;
    const dotSizes = !withoutDots ? this.getDotSizes(value) : null;
    const circleClassNameCN = cn('circle', {
      dark: !isPositive,
    });
    return (
      <div key={key} className="dot">
        {!withoutDots && (
          <div className="circle-wrapper">
            <span
              className={circleClassNameCN}
              style={dotSizes}
            />
          </div>
        )}
        <span className="value">
          {value}
        </span>
      </div>
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
    const dotedChartCN = cn('doted-chart', { titled: !!title });
    return (
      <div className={dotedChartCN}>
        {title && (
          <h3 className="title">
            {title}
          </h3>
        )}
        <div className="dots">
          {data.map(this.renderDotElement)}
        </div>
        {dotsWithName && (
          <div className="names-row">
            {data.map(DotedChart.renderName)}
          </div>
        )}
      </div>
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
