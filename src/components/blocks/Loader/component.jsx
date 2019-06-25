import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import { white } from '@/constants/theme';

import LoaderContainer from './styledComponents';

const LoaderComponent = (props) => {
  const {
    type,
    color,
    width,
    height,
  } = props;
  return (
    <LoaderContainer>
      <Loader
        type={type}
        color={color}
        height={width}
        width={height}
      />
    </LoaderContainer>
  );
};

LoaderComponent.defaultProps = {
  type: 'Circles',
  color: white,
  width: 50,
  height: 50,
};
LoaderComponent.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default LoaderComponent;
