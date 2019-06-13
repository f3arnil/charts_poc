import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { DrugableWidgetBlock as WidgetBlock } from '@/components/WidgetBlock';

const style = {
  height: '100%',
  width: '20%',
  color: 'blcak',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  minHeight: '300px',
  overflow: 'hidden',
};

const DrugableBlock = (props) => {
  const {
    items,
    accept,
    name,
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

  return (
    <div ref={drop} style={Object.assign({}, style)}>
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

DrugableBlock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  accept: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};

DrugableBlock.defaultProps = {
  items: [],
  accept: [],
  name: '',
};

export default React.memo(DrugableBlock);
