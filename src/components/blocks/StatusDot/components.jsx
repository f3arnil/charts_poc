import React from 'react';
import PropTypes from 'prop-types';

const StatusDot = ({ color }) => (
  <div
    className="status-dot"
    style={{
      background: color,
    }}
  />
);

StatusDot.propTypes = {
  color: PropTypes.string.isRequired,
};

export default React.memo(StatusDot);
