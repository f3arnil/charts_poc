import React from 'react';
import PropTypes from 'prop-types';

import { getFormatedDateWithMonthName } from '@/helpers/formaters';
import calendarIcon from '@/assets/icons/calendar.svg';

const PlanBlock = ({ date, type, description }) => {
  const formatedDate = getFormatedDateWithMonthName(date);
  const planTitle = `${formatedDate} | ${type}`;
  return (
    <div className="plan-block">
      <img src={calendarIcon} alt={planTitle} className="icon" />
      <div className="plan-description">
        <div className="title">{planTitle}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

PlanBlock.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default React.memo(PlanBlock);
