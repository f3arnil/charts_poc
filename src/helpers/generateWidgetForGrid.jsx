import React from 'react';
import Widget from '@/components/blocks/Widget';

const generateWidgetForGrid = ({
  widget = {},
  x,
  y,
  doubleWidth = false,
}) => ({
  i: widget.type,
  Component: props => <Widget {...props} {...widget} />,
  x,
  y,
  w: doubleWidth ? (widget.defaultWidth * 2) : widget.defaultWidth,
  h: widget.defaultHeight,
  minW: doubleWidth ? (widget.minWidth * 2) : widget.minWidth,
  minH: widget.minHeight,
});

export default generateWidgetForGrid;
