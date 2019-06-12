import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import WidgetBlock from '@/components/WidgetBlock';

const style = {
  height: '100%',
  width: '20%',
  // marginRight: '10px',
  // marginBottom: '1.5rem',
  color: 'blcak',
  // padding: '1rem',
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
    onDrop,
    accept,
    index,
    // name,
  } = props;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = '#e2dede';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <div ref={drop} style={Object.assign({}, style, { backgroundColor })}>
      {items.map(item => (
        <WidgetBlock key={item} type={item} index={index} />
      ))}
    </div>
  );
};

DrugableBlock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onDrop: PropTypes.func,
  accept: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
  // name: PropTypes.string,
};

DrugableBlock.defaultProps = {
  items: [],
  accept: [],
  onDrop: () => {},
  index: 0,
  // name: '',
};

export default React.memo(DrugableBlock);
