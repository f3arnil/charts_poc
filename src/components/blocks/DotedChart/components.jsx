import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isObject from 'lodash/isObject';

class DotedChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderDotElement = this.renderDotElement.bind(this);
    this.renderDotFromNumber = this.renderDotFromNumber.bind(this);
    this.renderDotFromObject = this.renderDotFromObject.bind(this);
  }

  static getDotSizes(value) {
    const size = Math.abs(value) * 6;
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  }

  renderDotFromNumber(value) {
    const { withoutDots } = this.props;
    const isPositive = value > 0;
    const circleClassNameCN = cn('circle', {
      dark: !isPositive,
    });
    return (
      <div className="dot">
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

  renderDotFromObject(data) {
    const { value } = data;
    const { withoutDots } = this.props;
    const isPositive = value > 0;
    const circleClassNameCN = cn('circle', {
      dark: !isPositive,
    });
    return (
      <div className="dot">
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

  static renderName(value) {
    const { name } = value;

    return (
      <span className="name">
        {name}
      </span>
    );
  }

  renderDotElement(value) {
    if (isObject(value)) {
      return this.renderDotFromObject(value);
    }

    return this.renderDotFromNumber(value);
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
  data: PropTypes.arrayOf(PropTypes.object),
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
