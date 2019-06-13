/* eslint-disable */
import React from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";

// TO DELETE
import '/../node_modules/react-grid-layout/css/styles.css'
import '/../node_modules/react-resizable/css/styles.css'

import { SystemStatusWidget } from '@/modules/SystemStatus/Components';
import { SwapCurwesWidget } from '@/modules/SwapCurwes/Components';
import { SQDatenBaumWidget } from '@/modules/SQDatenBaum/Components';
import { TXDatenBaumWidget } from '@/modules/TXDatenBaum/Components';
import { SchedulingWidget } from '@/modules/Scheduling/Components';
import { RSXBottomUpWidget } from '@/modules/RSXBottomUp/Components';
import { KursWidget } from '@/modules/Kurs/Components';
import { GruppeWidget } from '@/modules/Gruppe/Components';
import { GoviCurwesWidget } from '@/modules/GoviCurwes/Components';
import { CheckScoreCardWidget } from '@/modules/CheckScoreCard/Components';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const itemsList = [
  {
    i: '0',
    Component: SystemStatusWidget,
    x: 0,
    y: 0,
    w: 2,
    h: 2,
  },
  {
    i: '1',
    Component: SwapCurwesWidget,
    x: 2,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '2',
    Component: GoviCurwesWidget,
    x: 5,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '3',
    Component: KursWidget,
    x: 8,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '4',
    Component: GruppeWidget,
    x: 11,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '5',
    Component: TXDatenBaumWidget,
    x: 0,
    y: 2,
    w: 2,
    h: 2,
  },
  {
    i: '6',
    Component: CheckScoreCardWidget,
    x: 2,
    y: 2,
    w: 9,
    h: 5,
    static: true,
  },
  {
    i: '7',
    Component: SchedulingWidget,
    x: 11,
    y: 2,
    w: 3,
    h: 5,
  },
  {
    i: '8',
    Component: SQDatenBaumWidget,
    x: 0,
    y: 6,
    w: 2,
    h: 2,
  },
  {
    i: '9',
    Component: RSXBottomUpWidget,
    x: 0,
    y: 8,
    w: 2,
    h: 1,
  },
  
]
const itemsListS = [
  {
    i: '0',
    Component: SystemStatusWidget,
    x: 0,
    y: 5,
    w: 2,
    h: 2,
  },
  {
    i: '1',
    Component: SwapCurwesWidget,
    x: 2,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '2',
    Component: GoviCurwesWidget,
    x: 5,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '3',
    Component: KursWidget,
    x: 8,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '4',
    Component: GruppeWidget,
    x: 11,
    y: 0,
    w: 3,
    h: 2,
  },
  {
    i: '5',
    Component: TXDatenBaumWidget,
    x: 0,
    y: 2,
    w: 2,
    h: 2,
  },
  {
    i: '6',
    Component: CheckScoreCardWidget,
    x: 2,
    y: 2,
    w: 9,
    h: 5,
  },
  {
    i: '7',
    Component: SchedulingWidget,
    x: 11,
    y: 2,
    w: 3,
    h: 5,
  },
  {
    i: '8',
    Component: SQDatenBaumWidget,
    x: 0,
    y: 6,
    w: 2,
    h: 2,
  },
  {
    i: '9',
    Component: RSXBottomUpWidget,
    x: 0,
    y: 8,
    w: 2,
    h: 1,
  },
  
]

class AddRemoveLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: itemsList,
      iZtems: itemsListS,
      newCounter: 0
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const { Component } = el;
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };

    const i = el.add ? "+" : el.i;
    
    return (
      <div key={i} data-grid={el} style={{ backgroundColor: '#948d8d', overflow: 'hidden' }}>
        <Component/>
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    console.error(breakpoint, cols)
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    console.error(layout)
    // this.props.onLayoutChange(layout);
    // this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    console.warn(this.state.items);
    return (
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 14, md: 14, sm: 14, xs: 14, xxs: 14}}
          rowHeight={90}
          layouts={{lg: this.state.items,  sm: this.state.iZtems}}
          // preventCollision={true}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
    );
  }
}

export default AddRemoveLayout;
