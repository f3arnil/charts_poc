import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { DragableWidgetBlock as WidgetBlock } from '@/components/blocks/WidgetBlock';

const DragableBlock = (props) => {
  const {
    items,
    accept,
    name,
    direction,
  } = props;
  const [widgets, setWidgets] = useState(items);

  const findWidget = (type) => {
    const widget = widgets.filter(item => item.type === type)[0];

    return {
      widget,
      index: widgets.indexOf(widget),
    };
  };

  const removeWidget = (type) => {
    const { index } = findWidget(type);

    setWidgets(
      update(widgets, {
        $splice: [
          [index, 1],
        ],
      }),
    );
  };

  const moveWidget = ({
    droppedWidget = {},
    itemsToRemove = 0,
    removeFromIndex = 0,
    atIndex = 0,
  }) => {
    const { index } = findWidget(droppedWidget.type);

    if (
      name !== droppedWidget.blockName
      && index !== -1
    ) {
      return;
    }

    setWidgets(
      update(widgets, {
        $splice: [[removeFromIndex, itemsToRemove], [atIndex, 0, { type: droppedWidget.type }]],
      }),
    );
  };

  const [, drop] = useDrop({ accept });

  const dropAreaBlockCN = cn('drop-area-block', direction);
  return (
    <div ref={drop} className={dropAreaBlockCN}>
      {widgets.map((item, index) => (
        <WidgetBlock
          key={item.type}
          id={index}
          blockName={name}
          moveWidget={moveWidget}
          findWidget={findWidget}
          removeWidget={removeWidget}
          accept={accept}
          {...item}
        />
      ))}
    </div>
  );
};

DragableBlock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  accept: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  direction: PropTypes.string,
};

DragableBlock.defaultProps = {
  items: [],
  accept: [],
  name: '',
  direction: '',
};

export default React.memo(DragableBlock);
