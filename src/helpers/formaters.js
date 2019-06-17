import dayjs from 'dayjs';

import {
  DATE_FORMAT,
  DATE_WITH_MONTH_NAME_FORMAT,
} from '@/constants/formates';

export const getFormatedDate = (date) => {
  return dayjs(date).format(DATE_FORMAT);
};

export const getFormatedDateWithMonthName = (date) => {
  return dayjs(date).format(DATE_WITH_MONTH_NAME_FORMAT);
};
