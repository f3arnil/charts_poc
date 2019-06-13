import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import WidgetBlock from './component';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const DrugableWidgetBlock = ({ type, index /* , isDropped */ }) => {
  if (!type || type === '') {
    return null;
  }

  const [{ opacity }, drag] = useDrag({
    item: { type, parentIndex: index },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  // const [isDragging, setDragging] = useState(false);

  return (
    <div
      ref={drag}
      style={Object.assign({}, style, { opacity })}
    >
      {/* <h1
        onPointerDown={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
      >
        title
      </h1> */}
      {/* {isDropped ? <s>{name}</s> : name} */}
      <div className="content">
        <WidgetBlock type={type} />
      </div>
    </div>
  );
};

DrugableWidgetBlock.propTypes = {
  type: PropTypes.string,
  index: PropTypes.number,
};

DrugableWidgetBlock.defaultProps = {
  type: '',
  index: 0,
};

export default React.memo(DrugableWidgetBlock);
