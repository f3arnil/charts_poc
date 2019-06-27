import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import { getFormatedDate } from '@/helpers/formaters';
import Loader from '@/components/blocks/Loader';

import {
  StyledStatusWidgetStyled,
  Event,
  Description,
  Date,
} from './styledComponents';

class SystemStatusWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  renderEvents = () => {
    const { events } = this.props;
    const eventsForRender = events.slice(0, 2);

    return eventsForRender.map((event, index) => {
      const isFirst = index === 0;
      return (
        <Event key={event.date} first={isFirst}>
          <Date large={isFirst}>
            {getFormatedDate(event.date)}
          </Date>
          <Description>
            {event.description}
          </Description>
        </Event>
      );
    });
  }

  render() {
    const { status } = this.props;

    if (status !== STATUSES.IDLE) {
      return (<Loader />);
    }
    return (
      <StyledStatusWidgetStyled>
        {this.renderEvents()}
      </StyledStatusWidgetStyled>
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
