import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PieChart from '@/components/blocks/PieChart';

class ChartsTitle extends React.PureComponent {
  render() {
    const {
      className,
      iconClassName,
      titleClassName,
      charts,
      icon,
      title,
    } = this.props;
    const containerClassNameCN = cn('charts-title', className);
    const titleClassNameCN = cn('title', titleClassName);
    const iconClassNameCN = cn('icon-wrapper', iconClassName);
    return (
      <div className={containerClassNameCN}>
        <div className={titleClassNameCN}>
          <div className={iconClassNameCN}>
            {icon && (
              <img alt={title} src={icon} />
            )}
          </div>
          <h4>{title}</h4>
        </div>
        <div className="charts">
          {charts.map((chart) => {
            const chartKey = `${title}--chart-${chart.label}`;
            const chartClassName = cn('chart', chart.className);
            return (
              <div key={chartKey} className={chartClassName}>
                <PieChart data={chart.values} />
                {chart.label && (
                  <span className="label">
                    {chart.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ChartsTitle.defaultProps = {
  className: '',
  iconClassName: '',
  titleClassName: '',
  icon: '',
  title: '',
  charts: [],
};

ChartsTitle.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  charts: PropTypes.arrayOf(PropTypes.object),
};

export default ChartsTitle;
