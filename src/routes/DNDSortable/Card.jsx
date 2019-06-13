import React from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { WidgetBlock } from '@/components/WidgetBlock';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const Card = ({
  id, type, moveCard, findCard,
}) => {
  const originalIndex = findCard(id).index;

  const [{ isDragging }, drag] = useDrag({
    item: { type, id: originalIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== type) {
        const { index: overIndex } = findCard(type);
        moveCard(draggedId, overIndex);
      }
    },
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <div
      ref={node => drag(drop(node))}
      style={Object.assign({}, style, { opacity })}
    >
      <WidgetBlock type={type} />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  type: '',
  moveCard: '',
  findCard: '',
};

Card.defaultProps = {
  id: '',
  type: '',
  moveCard: '',
  findCard: '',
};

export default Card;
