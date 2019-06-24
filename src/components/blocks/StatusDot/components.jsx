import React from 'react';
import PropTypes from 'prop-types';

import StatusDotStyled from './styledComponents';

const StatusDot = ({ color }) => (
  <StatusDotStyled
    className="status-dot"
    color={color}
  />
);

StatusDot.propTypes = {
  color: PropTypes.string.isRequired,
};

export default React.memo(StatusDot);
