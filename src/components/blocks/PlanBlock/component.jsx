import React from 'react';
import PropTypes from 'prop-types';

import { getFormatedDateWithMonthName } from '@/helpers/formaters';
import calendarIcon from '@/assets/icons/calendar.svg';

import {
  PlanBlockStyled,
  Icon,
  PlanDescription,
  Title,
  Description,
} from './styledComponents';

const PlanBlock = ({ date, type, description }) => {
  const formatedDate = getFormatedDateWithMonthName(date);
  const planTitle = `${formatedDate} | ${type}`;
  return (
    <PlanBlockStyled>
      <Icon src={calendarIcon} alt={planTitle} />
      <PlanDescription>
        <Title>{planTitle}</Title>
        <Description>{description}</Description>
      </PlanDescription>
    </PlanBlockStyled>
  );
};

PlanBlock.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(PlanBlock);
