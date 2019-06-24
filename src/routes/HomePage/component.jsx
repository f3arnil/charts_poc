import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import map from 'lodash/map';
import reject from 'lodash/reject';
import differenceBy from 'lodash/differenceBy';

import 'react-grid-layout/css/styles.css';

import Widget from '@/components/blocks/Widget';
import {
  WIDGET_SYSTEM_STATUS,
  WIDGET_SWAP_CURVES,
  WIDGET_GOVI_CURVES,
  WIDGET_KURS,
  WIDGET_GRUPPE,
  WIDGET_TX_DATENBAUM,
  WIDGET_SQ_DATENBAUM,
  WIDGET_RSX_BOTTOM_UP,
  WIDGET_CHECK_SCORE_CARD,
  WIDGET_SCHEDULING,
} from '@/constants/widgets';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const itemsList = [
  {
    i: WIDGET_SYSTEM_STATUS.type,
    Component: props => <Widget {...props} {...WIDGET_SYSTEM_STATUS} />,
    x: 0,
    y: 0,
    w: WIDGET_SYSTEM_STATUS.defaultWidth,
    h: WIDGET_SYSTEM_STATUS.defaultHeight,
    minW: WIDGET_SYSTEM_STATUS.minWidth,
    minH: WIDGET_SYSTEM_STATUS.minHeight,
  },
  {
    i: WIDGET_SWAP_CURVES.type,
    Component: props => <Widget {...props} {...WIDGET_SWAP_CURVES} />,
    x: 4,
    y: 0,
    w: WIDGET_SWAP_CURVES.defaultWidth,
    h: WIDGET_SWAP_CURVES.defaultHeight,
    minW: WIDGET_SWAP_CURVES.minWidth,
    minH: WIDGET_SWAP_CURVES.minHeight,
  },
  {
    i: WIDGET_GOVI_CURVES.type,
    Component: props => <Widget {...props} {...WIDGET_GOVI_CURVES} />,
    x: 8,
    y: 0,
    w: WIDGET_GOVI_CURVES.defaultWidth,
    h: WIDGET_GOVI_CURVES.defaultHeight,
    minW: WIDGET_GOVI_CURVES.minWidth,
    minH: WIDGET_GOVI_CURVES.minHeight,
  },
  {
    i: WIDGET_KURS.type,
    Component: props => <Widget {...props} {...WIDGET_KURS} />,
    x: 12,
    y: 0,
    w: WIDGET_KURS.defaultWidth,
    h: WIDGET_KURS.defaultHeight,
    minW: WIDGET_KURS.minWidth,
    minH: WIDGET_KURS.minHeight,
  },
  {
    i: WIDGET_GRUPPE.type,
    Component: props => <Widget {...props} {...WIDGET_GRUPPE} />,
    x: 16,
    y: 0,
    w: WIDGET_GRUPPE.defaultWidth,
    h: WIDGET_GRUPPE.defaultHeight,
    minW: WIDGET_GRUPPE.minWidth,
    minH: WIDGET_GRUPPE.minHeight,
  },
  {
    i: WIDGET_TX_DATENBAUM.type,
    Component: props => <Widget {...props} {...WIDGET_TX_DATENBAUM} />,
    x: 0,
    y: 3,
    w: WIDGET_TX_DATENBAUM.defaultWidth,
    h: WIDGET_TX_DATENBAUM.defaultHeight,
    minW: WIDGET_TX_DATENBAUM.minWidth,
    minH: WIDGET_TX_DATENBAUM.minHeight,
  },
  {
    i: WIDGET_CHECK_SCORE_CARD.type,
    Component: props => <Widget {...props} {...WIDGET_CHECK_SCORE_CARD} />,
    x: 4,
    y: 3,
    w: WIDGET_CHECK_SCORE_CARD.defaultWidth,
    h: WIDGET_CHECK_SCORE_CARD.defaultHeight,
    minW: WIDGET_CHECK_SCORE_CARD.minWidth,
    minH: WIDGET_CHECK_SCORE_CARD.minHeight,
  },
  {
    i: WIDGET_SCHEDULING.type,
    Component: props => <Widget {...props} {...WIDGET_SCHEDULING} />,
    x: 16,
    y: 3,
    w: WIDGET_SCHEDULING.defaultWidth,
    h: WIDGET_SCHEDULING.defaultHeight,
    minW: WIDGET_SCHEDULING.minWidth,
    minH: WIDGET_SCHEDULING.minHeight,
  },
  {
    i: WIDGET_SQ_DATENBAUM.type,
    Component: props => <Widget {...props} {...WIDGET_SQ_DATENBAUM} />,
    x: 0,
    y: 6,
    w: WIDGET_SQ_DATENBAUM.defaultWidth,
    h: WIDGET_SQ_DATENBAUM.defaultHeight,
    minW: WIDGET_SQ_DATENBAUM.minWidth,
    minH: WIDGET_SQ_DATENBAUM.minHeight,
  },
  {
    i: WIDGET_RSX_BOTTOM_UP.type,
    Component: props => <Widget {...props} {...WIDGET_RSX_BOTTOM_UP} />,
    x: 0,
    y: 9,
    w: WIDGET_RSX_BOTTOM_UP.defaultWidth,
    h: WIDGET_RSX_BOTTOM_UP.defaultHeight,
    minW: WIDGET_RSX_BOTTOM_UP.minWidth,
    minH: WIDGET_RSX_BOTTOM_UP.minHeight,
  },
];

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prevItems: itemsList,
      items: itemsList,
      newCounter: 0,
    };
  }

  onAddItem = () => {
    const { newCounter, items } = this.state;
    console.log('adding', 'n', newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: items.concat({
        i: newCounter,
        x: (items.length * 2) % (12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      }),
      newCounter: newCounter + 1,
    });
  }

  onLayoutChange = (items) => {
    const { items: stateItems, prevItems } = this.state;
    const deletedItem = differenceBy(prevItems, stateItems)[0] || {};

    if (deletedItem && deletedItem.i) {
      const prevItemsByY = prevItems.filter(widget => widget.y === deletedItem.y);
      const prevItemsByX = prevItems.filter(widget => widget.x === deletedItem.x);
      const indexByY = prevItemsByY.findIndex(widget => widget.i === deletedItem.i);
      const indexByX = prevItemsByX.findIndex(widget => widget.i === deletedItem.i);
      const currentItemsByY = items
        .filter(widget => widget.x >= deletedItem.x && widget.y === deletedItem.y);
      const currentItemsByX = items
        .filter(widget => widget.y >= deletedItem.y && widget.x === deletedItem.x);
      const itemAtDeletePosition = currentItemsByY[0] || null;

      const changedY = prevItemsByY.length !== currentItemsByY.length;
      console.log('TCL: AddRemoveLayout -> onLayoutChange -> changedY', changedY);
      const changedX = prevItemsByX.length !== currentItemsByX.length;
      console.log('TCL: AddRemoveLayout -> onLayoutChange -> changedX', changedX);

      console.log('TCL: AddRemoveLayout -> onLayoutChange -> itemAtDeletePosition', itemAtDeletePosition);
      const itemsByYAfterCurrent = indexByY !== -1 && !itemAtDeletePosition
        ? prevItemsByY
          .slice(indexByY + 1)
          .map(widget => ({
            ...widget,
            x: widget.x - deletedItem.w,
          }))
        : prevItemsByY;

      console.log('> TCL: AddRemoveLayout -> onLayoutChange -> prevItemsByY', prevItemsByY);
      console.log('> TCL: AddRemoveLayout -> onLayoutChange -> currentItemsByY', currentItemsByY);
      console.log('> TCL: AddRemoveLayout -> onLayoutChange -> indexByY', indexByY);
      console.log(' > TCL: AddRemoveLayout -> onLayoutChange -> prevItemsByX', prevItemsByX);
      console.log(' > TCL: AddRemoveLayout -> onLayoutChange -> currentItemsByX', currentItemsByX);
      console.log(' > TCL: AddRemoveLayout -> onLayoutChange -> indexByX', indexByX);
      console.log('   > TCL: AddRemoveLayout -> onLayoutChange -> itemsByYAfterCurrent', itemsByYAfterCurrent);

      const newItems = stateItems.map((widget) => {
        const updatedWidget = itemsByYAfterCurrent.find(item => item.i === widget.i);

        if (updatedWidget) {
          return updatedWidget;
        }

        return widget;
      });
      console.log('>>> TCL: AddRemoveLayout -> onLayoutChange -> newItems', newItems);

      this.setState({
        items: newItems,
        prevItems: newItems,
      });
    }
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange = (breakpoint, cols) => {
    console.log('TCL: AddRemoveLayout -> onBreakpointChange', breakpoint, cols);
  }

  onRemoveItem = i => () => {
    const { items } = this.state;
    const rejectedItems = reject(items, { i });
    this.setState({
      items: rejectedItems,
      prevItems: items,
    });
  }

  createElement(el) {
    const { Component, i } = el;

    return (
      <div key={i} data-grid={el} style={{ overflow: 'hidden' }}>
        <Component removeWidget={this.onRemoveItem(i)} />
      </div>
    );
  }

  render() {
    const { items } = this.state;
    return (
      <ResponsiveReactGridLayout
        onLayoutChange={this.onLayoutChange}
        onBreakpointChange={this.onBreakpointChange}
        breakpoints={{
          lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
        }}
        cols={{
          lg: 20, md: 20, sm: 20, xs: 20, xxs: 20,
        }}
        rowHeight={40}
        margin={[20, 20]}
        containerPadding={[0, 0]}
        layouts={{
          lg: items,
          md: items,
          sm: items,
          xs: items,
          xxs: items,
        }}
        {...this.props}
      >
        {map(items, el => this.createElement(el))}
      </ResponsiveReactGridLayout>
    );
  }
}

export default HomePage;
