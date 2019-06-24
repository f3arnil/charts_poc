import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import ChartsTitle from '@/components/blocks/ChartsTitle';
import gridIcon from '@/assets/icons/grid.svg';

const WIDGET_TITLE = 'RSX';

class RSXBottomUpWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { values } = this.props;
    return (
      <div className="widget rsx-bottom-up-widget">
        <ChartsTitle
          color="red"
          icon={gridIcon}
          title={WIDGET_TITLE}
          charts={values}
        />
      </div>
    );
  }
}

RSXBottomUpWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
};

RSXBottomUpWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
};

export default RSXBottomUpWidget;
