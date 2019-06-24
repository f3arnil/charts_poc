import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { STATUSES } from '@/constants/redux';
import ChartsTitle from '@/components/blocks/ChartsTitle';
import Tree from '@/components/blocks/Tree';
import treeIcon from '@/assets/icons/tree.svg';

const WIDGET_TITLE = 'SQ';

class SQDatenBaumWidget extends React.PureComponent {
  componentDidMount() {
    const { status, getData } = this.props;

    if (status === STATUSES.NOT_REQUESTED) {
      getData();
    }
  }

  render() {
    const { values } = this.props;
    return (
      <div className="widget sq-daten-baum-widget">
        <ChartsTitle
          color="yellow"
          icon={treeIcon}
          title={WIDGET_TITLE}
          charts={values}
        />
        <Tree />
      </div>
    );
  }
}

SQDatenBaumWidget.defaultProps = {
  getData: noop,
  status: STATUSES.NOT_REQUESTED,
  values: [],
  // tree: [],
};

SQDatenBaumWidget.propTypes = {
  getData: PropTypes.func,
  status: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.object),
  // tree: PropTypes.arrayOf(PropTypes.number),
};

export default SQDatenBaumWidget;
