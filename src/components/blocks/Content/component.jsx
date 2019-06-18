import React from 'react';
import cn from 'classnames';

import DropArea from '@/components/blocks/DropArea';
import {
  LEFT_BLOCK_DEFAULT_WIDGETS,
  RIGHT_BLOCK_DEFAULT_WIDGETS,
  CENTER_TOP_DEFAULT_WIDGETS,
  CENTER_BOTTOM_DEFAULT_WIDGETS,
} from '@/constants/widgetTypes';

const blocks = {
  left: {
    data: [{
      items: LEFT_BLOCK_DEFAULT_WIDGETS
        .map(item => ({ type: item })),
      accepts: [
        ...LEFT_BLOCK_DEFAULT_WIDGETS,
        ...CENTER_TOP_DEFAULT_WIDGETS,
        ...RIGHT_BLOCK_DEFAULT_WIDGETS,
      ],
    }],
  },
  center: {
    direction: 'column',
    data: [
      {
        direction: 'row',
        items: CENTER_TOP_DEFAULT_WIDGETS
          .map(item => ({ type: item })),
        accepts: [
          ...LEFT_BLOCK_DEFAULT_WIDGETS,
          ...CENTER_TOP_DEFAULT_WIDGETS,
          ...RIGHT_BLOCK_DEFAULT_WIDGETS,
        ],
      },
      {
        items: CENTER_BOTTOM_DEFAULT_WIDGETS
          .map(item => ({ type: item })),
        accepts: [
          ...LEFT_BLOCK_DEFAULT_WIDGETS,
          ...CENTER_TOP_DEFAULT_WIDGETS,
          ...CENTER_BOTTOM_DEFAULT_WIDGETS,
          ...RIGHT_BLOCK_DEFAULT_WIDGETS,
        ],
      },
    ],
  },
  right: {
    data: [{
      items: RIGHT_BLOCK_DEFAULT_WIDGETS
        .map(item => ({ type: item })),
      accepts: [
        ...LEFT_BLOCK_DEFAULT_WIDGETS,
        ...CENTER_TOP_DEFAULT_WIDGETS,
        ...RIGHT_BLOCK_DEFAULT_WIDGETS,
      ],
    }],
  },
};

const Container = () => (
  <div className="drop-areas-container">
    {Object.keys(blocks).map((blockName) => {
      const block = blocks[blockName];
      const blockCN = cn(blockName, 'drop-areas', block.direction);
      return (
        <div key={blockName} className={blockCN}>
          {block.data.map(({ accepts, items, direction }, index) => (
            <DropArea
              direction={direction}
              accept={accepts}
              items={items}
              key={`${blockName}-${index.toString()}`} // TODO to improve
              name={blockName}
            />
          ))}
        </div>
      );
    })
    }
  </div>
);

export default React.memo(Container);
