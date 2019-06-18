import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import cn from 'classnames';

import spreadIcon from '@/assets/icons/spread.svg';
import { WIDGET_TITLES } from '@/constants/widgetTypes';
import WidgetBlock from './component';

const DragableWidgetBlock = ({
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

  const widgetBlockCN = cn('widget-block', {
    dragging: isDragging,
  });

  return (
    <div
      className={widgetBlockCN}
      ref={preview}
    >
      <div className="widget-block__header">
        <h4 ref={node => drag(drop(node))}>{WIDGET_TITLES[type]}</h4>
        {/* This ref ^ could be passed inside container */}
        <span className="actions">
          <img alt="Actions" src={spreadIcon} />
        </span>
      </div>
      <WidgetBlock type={type} onRemove={removeWidget} />
    </div>
  );
};

DragableWidgetBlock.propTypes = {
  type: PropTypes.string,
  accept: PropTypes.arrayOf(PropTypes.string),
  blockName: PropTypes.string,
  findWidget: PropTypes.func,
  moveWidget: PropTypes.func,
  removeWidget: PropTypes.func,
};

DragableWidgetBlock.defaultProps = {
  type: '',
  accept: [],
  blockName: '',
  findWidget: noop,
  moveWidget: noop,
  removeWidget: noop,
};

export default React.memo(DragableWidgetBlock);
