import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

import WidgetBlock from './component';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  float: 'left',
};

const DrugableWidgetBlock = ({
  type,
  accept,
  findWidget,
  moveWidget,
  removeWidget,
  blockName,
}) => {
  const originalIndex = findWidget(type).index;

  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      type,
      id: originalIndex,
      removeWidget,
      blockName,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept,
    canDrop: () => false,
    hover(droppedWidget) {
      const {
        type: draggedType,
        removeWidget: removeCb,
        blockName: name,
      } = droppedWidget;

      if (name !== blockName && draggedType !== type) {
        const { index: overIndex } = findWidget(type);
        removeCb(draggedType);
        moveWidget({
          droppedWidget: {
            ...droppedWidget,
          },
          itemsToRemove: 0,
          removeFromIndex: 0,
          atIndex: overIndex,
        });
        return;
      }

      if (draggedType !== type) {
        const { index: overIndex } = findWidget(type);

        const { widget, index } = findWidget(draggedType);

        moveWidget({
          droppedWidget: {
            ...widget,
            blockName: name,
          },
          itemsToRemove: 1,
          removeFromIndex: index,
          atIndex: overIndex,
        });
      }
    },
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={preview}
      style={Object.assign({}, style, { opacity })}
    >
      <h4 style={{ cursor: 'move' }} ref={node => drag(drop(node))}>TITLE</h4>
      {/* This ref ^ could be passed inside container */}
      <WidgetBlock type={type} onRemove={removeWidget} />
    </div>
  );
};

DrugableWidgetBlock.propTypes = {
  type: PropTypes.string,
  accept: PropTypes.arrayOf(PropTypes.string),
  blockName: PropTypes.string,
  findWidget: PropTypes.func,
  moveWidget: PropTypes.func,
  removeWidget: PropTypes.func,
};

DrugableWidgetBlock.defaultProps = {
  type: '',
  accept: [],
  blockName: '',
  findWidget: noop,
  moveWidget: noop,
  removeWidget: noop,
};

export default React.memo(DrugableWidgetBlock);
