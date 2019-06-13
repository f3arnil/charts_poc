import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import { get } from 'lodash';

import DropArea from '@/components/HomePage/DropArea';
import {
  LEFT_BLOCK_DEFAULT_WIDGETS,
  RIGHT_BLOCK_DEFAULT_WIDGETS,
  CENTER_BLOCK_DEFAULT_WIDGETS,
} from '@/constants/widgetTypes';

const Container = () => {
  const [blocks, setBlocksData] = useState([
    { name: 'left', accepts: [...LEFT_BLOCK_DEFAULT_WIDGETS, ...RIGHT_BLOCK_DEFAULT_WIDGETS], items: LEFT_BLOCK_DEFAULT_WIDGETS },
    { name: 'center', accepts: [...LEFT_BLOCK_DEFAULT_WIDGETS, ...CENTER_BLOCK_DEFAULT_WIDGETS, ...RIGHT_BLOCK_DEFAULT_WIDGETS], items: CENTER_BLOCK_DEFAULT_WIDGETS },
    { name: 'right', accepts: [...LEFT_BLOCK_DEFAULT_WIDGETS, ...RIGHT_BLOCK_DEFAULT_WIDGETS], items: RIGHT_BLOCK_DEFAULT_WIDGETS },
  ]);

  const handleDrop = useCallback(
    (index, item) => {
      const { /* type, */ parentIndex } = item;
      if (index === parentIndex) {
        // console.error('exit', type, parentIndex, index);
        return;
      }

      const initialParrentArray = get(blocks, [parentIndex, 'items']);
      const newParentArray = initialParrentArray.filter(
        parentItem => item.type !== parentItem,
      );

      setBlocksData(
        update(blocks, {
          [index]: {
            items: {
              $push: [item.type],
            },
          },
          [item.parentIndex]: {
            items: {
              $set: newParentArray,
            },
          },
        }),
      );
    },
    [blocks],
  );

  return (
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      {blocks.map(({ accepts, name, items }, index) => (
        <DropArea
          accept={accepts}
          items={items}
          index={index}
          onDrop={item => handleDrop(index, item)}
          key={name}
          name={name}
        />
      ))}
    </div>
  );
};

export default React.memo(Container);
