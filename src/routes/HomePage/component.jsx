import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import map from 'lodash/map';
import reject from 'lodash/reject';
import differenceBy from 'lodash/differenceBy';

import 'react-grid-layout/css/styles.css';

import largeLayoutItems from './layouts/large';
import middleLayoutItems from './layouts/middle';
import smallLayoutItems from './layouts/small';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      breakpoint: 'lg',
      prevItems: largeLayoutItems,
      items: largeLayoutItems,
    };
  }

  onLayoutChange = (items) => {
    const { items: stateItems, prevItems } = this.state;
    const deletedItem = differenceBy(prevItems, stateItems)[0] || {};

    if (deletedItem && deletedItem.i) {
      const prevItemsByY = prevItems.filter(widget => widget.y === deletedItem.y);
      const indexByY = prevItemsByY.findIndex(widget => widget.i === deletedItem.i);
      const currentItemsByY = items
        .filter(widget => widget.x >= deletedItem.x && widget.y === deletedItem.y);
      const currentItemsByX = items
        .filter(widget => widget.y >= deletedItem.y && widget.x === deletedItem.x);

      const itemsByYAfterCurrent = (indexByY !== -1 && currentItemsByX.length === 0)
        || (currentItemsByY.length > 0 && currentItemsByX.length === 0)
        || (currentItemsByX.length === 1 && currentItemsByX[0].w > currentItemsByY[0].w)
        ? currentItemsByY
          .map(widget => ({
            ...widget,
            x: widget.h >= deletedItem.h ? widget.x - deletedItem.w : widget.x,
          }))
        : currentItemsByY;

      const newItems = stateItems.map((widget) => {
        const updatedWidget = itemsByYAfterCurrent.find(item => item.i === widget.i);
        const currentWidget = items.find(item => item.i === widget.i);

        return ({
          ...widget,
          ...currentWidget,
          x: updatedWidget ? updatedWidget.x : currentWidget.x,
        });
      });

      this.setState({
        items: newItems,
        prevItems: newItems,
      });
    }
  }

  onBreakpointChange = (breakpoint) => {
    const { breakpoint: oldBreakpoint } = this.state;

    if (oldBreakpoint !== breakpoint) {
      let items = [];

      switch (breakpoint) {
        case 'md':
        case 'sm':
        case 'xs':
          items = middleLayoutItems;
          break;
        case 'xxs':
          items = smallLayoutItems;
          break;
        default:
          items = largeLayoutItems;
          break;
      }

      this.setState({ items });
    }
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
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        breakpoints={{
          lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
        }}
        cols={{
          lg: 20, md: 8, sm: 8, xs: 8, xxs: 4,
        }}
        rowHeight={40}
        margin={[20, 20]}
        containerPadding={[0, 0]}
        layouts={{
          lg: items,
          md: middleLayoutItems,
          sm: middleLayoutItems,
          xs: middleLayoutItems,
          xxs: smallLayoutItems,
        }}
        {...this.props}
      >
        {map(items, el => this.createElement(el))}
      </ResponsiveReactGridLayout>
    );
  }
}

export default HomePage;
