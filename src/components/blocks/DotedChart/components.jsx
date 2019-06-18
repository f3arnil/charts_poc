import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isObject from 'lodash/isObject';

class DotedChart extends React.PureComponent {
  static getDotSizes(value) {
    const size = Math.abs(value) * 6;
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  }

  static renderName(value) {
    const { name } = value;
    const key = `name__${name}--${value.value}`;

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
    const circleClassNameCN = cn('circle', {
      dark: !isPositive,
    });
    return (
      <div key={key} className="dot">
        {!withoutDots && (
          <span
            className={circleClassNameCN}
            style={DotedChart.getDotSizes(value)}
          />
        )}
        <span className="value">
          {value}
        </span>
      </div>
    );
  }

  renderDotFromObject = (data) => {
    const { value } = data;
    const { withoutDots } = this.props;
    const isPositive = value > 0;
    const key = `dot__${value}--${data.name}`;
    const circleClassNameCN = cn('circle', {
      dark: !isPositive,
    });
    return (
      <div key={key} className="dot">
        {!withoutDots && (
          <span
            className={circleClassNameCN}
            style={DotedChart.getDotSizes(value)}
          />
        )}
        <span className="value">
          {value}
        </span>
      </div>
    );
  }

  renderDotElement = (value, index) => {
    if (isObject(value)) {
      return this.renderDotFromObject(value, index);
    }

    return this.renderDotFromNumber(value, index);
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
};

DotedChart.defaultProps = {
  data: [],
  title: '',
  withoutDots: false,
  dotsWithName: false,
};

export default DotedChart;
