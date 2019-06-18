import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';

import WidgetBlock from './component';
import spreadIcon from '@/assets/icons/spread.svg';

const DragableWidgetBlock = ({
  type,
  title,
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
      className="widget-block"
      ref={preview}
      style={{ opacity }}
    >
      <div className="widget-block__header">
        <h4 ref={node => drag(drop(node))}>{title}</h4>
        <span className="actions">
          <img alt="Actions" src={spreadIcon} />
        </span>
      </div>
      {/* This ref ^ could be passed inside container */}
      <WidgetBlock type={type} onRemove={removeWidget} />
    </div>
  );
};

DragableWidgetBlock.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  accept: PropTypes.arrayOf(PropTypes.string),
  blockName: PropTypes.string,
  findWidget: PropTypes.func,
  moveWidget: PropTypes.func,
  removeWidget: PropTypes.func,
};

DragableWidgetBlock.defaultProps = {
  type: '',
  title: 'TITLE',
  accept: [],
  blockName: '',
  findWidget: noop,
  moveWidget: noop,
  removeWidget: noop,
};

export default React.memo(DragableWidgetBlock);
