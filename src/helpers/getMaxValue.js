import get from 'lodash/get';
import isObject from 'lodash/isObject';
import isNumber from 'lodash/isNumber';

const getMaxModuloValue = (data = [], dataSelector = '') => {
  const numbers = data.reduce((acc, item) => {
    let items = [Math.abs(item)];
    if (isObject(item)) {
      const selectedData = get(item, dataSelector, []);
      if (Array.isArray(selectedData)) {
        items = selectedData.map(value => Math.abs(value));
      } else if (isNumber(selectedData)) {
        items = [Math.abs(selectedData)];
      }
    }

    return [...acc, ...items];
  }, []);

  return Math.max(...numbers);
};

export default getMaxModuloValue;
