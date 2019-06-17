import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import cn from 'classnames';

import { STATUSES } from '@/constants/redux';
import { getFormatedDate } from '@/helpers/formaters';

class SystemStatusWidget extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  renderEvents() {
    const { events } = this.props;
    const eventsForRender = events.slice(0, 2);

    return eventsForRender.map((event, index) => {
      const isFirst = index === 0;
      const className = cn({
        event: true,
        first: isFirst,
      });
      return (
        <div className={className} key={event.date}>
          <h3 className="date">
            {getFormatedDate(event.date)}
          </h3>
          <p className="description">
            {event.description}
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="widget system-status-block">
        {this.renderEvents()}
      </div>
    );
  }
}

SystemStatusWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  events: [],
};

SystemStatusWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.object),
};

export default SystemStatusWidget;
