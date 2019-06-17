import React from 'react';

import DropArea from '@/components/blocks/DropArea';
import {
  WIDGET_TITLES,
  LEFT_BLOCK_DEFAULT_WIDGETS,
  RIGHT_BLOCK_DEFAULT_WIDGETS,
  CENTER_TOP_DEFAULT_WIDGETS,
  CENTER_BOTTOM_DEFAULT_WIDGETS,
} from '@/constants/widgetTypes';

const blocks = {
  left: [{
    items: LEFT_BLOCK_DEFAULT_WIDGETS
      .map(item => ({ type: item, title: WIDGET_TITLES[item] })),
    accepts: [
      ...LEFT_BLOCK_DEFAULT_WIDGETS,
      ...CENTER_TOP_DEFAULT_WIDGETS,
      ...RIGHT_BLOCK_DEFAULT_WIDGETS,
    ],
  }],
  center: [
    {
      items: CENTER_TOP_DEFAULT_WIDGETS
        .map(item => ({ type: item, title: WIDGET_TITLES[item] })),
      accepts: [
        ...LEFT_BLOCK_DEFAULT_WIDGETS,
        ...CENTER_TOP_DEFAULT_WIDGETS,
        ...RIGHT_BLOCK_DEFAULT_WIDGETS,
      ],
    },
    {
      items: CENTER_BOTTOM_DEFAULT_WIDGETS
        .map(item => ({ type: item, title: WIDGET_TITLES[item] })),
      accepts: [
        ...LEFT_BLOCK_DEFAULT_WIDGETS,
        ...CENTER_TOP_DEFAULT_WIDGETS,
        ...CENTER_BOTTOM_DEFAULT_WIDGETS,
        ...RIGHT_BLOCK_DEFAULT_WIDGETS,
      ],
    },
  ],
  right: [{
    items: RIGHT_BLOCK_DEFAULT_WIDGETS
      .map(item => ({ type: item, title: WIDGET_TITLES[item] })),
    accepts: [
      ...LEFT_BLOCK_DEFAULT_WIDGETS,
      ...CENTER_TOP_DEFAULT_WIDGETS,
      ...RIGHT_BLOCK_DEFAULT_WIDGETS,
    ],
  }],
};

const Container = () => (
  <div style={{ overflow: 'hidden', clear: 'both' }}>
    {Object.keys(blocks).map(blockName => (
      <div key={blockName} className={blockName}>
        {blocks[blockName].map(({ accepts, items }, index) => (
          <DropArea
            accept={accepts}
            items={items}
            key={`${blockName}-${index.toString()}`} // TODO to improve
            name={blockName}
          />
        ))}
      </div>
    ))
    }
  </div>
);

export default React.memo(Container);
