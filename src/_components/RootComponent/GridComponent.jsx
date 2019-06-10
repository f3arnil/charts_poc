import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import PieChart from 'react-minimal-pie-chart';
import { noop, reject, map } from 'lodash';
// import '../../../node_modules/react-grid-layout/css/styles.css';
// import '../../../node_modules/react-resizable/css/styles.css';
import styles from './styles.css';

// eslint-disable-next-line
console.log(styles);

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class AddRemoveLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: [0, 1, 2, 3, 4].map((i, key, list) => {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: i === (list.length - 1).toString(),
        };
      }),
      newCounter: 0,
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onGridLayoutChange = this.onGridLayoutChange.bind(this);
  }

  onAddItem() {
    const { items, newCounter, cols } = this.state;
    // /*eslint no-console: 0*/
    // console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: items.concat({
        i: `n${newCounter}`,
        x: (items.length * 2) % (cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: newCounter + 1,
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      // breakpoint,
      cols,
    });
  }

  onGridLayoutChange(layout) {
    const { onLayoutChange = noop } = this.props;

    onLayoutChange(layout);
    // this.setState({ layout });
  }

  onRemoveItem(i) {
    const { items } = this.state;
    // console.log("removing", i);
    this.setState({ items: reject(items, { i }) });
  }

  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    const i = el.add ? '+' : el.i;

    return (
      <div key={i} data-grid={el} className="react-grid-item react-draggable cssTransforms react-resizable">
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
            role="presentation"
          >
            Add +
          </span>
        ) : (
          <span className="text">
            <PieChart
              data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
                { title: 'Four', value: 20, color: 'gray' },
              ]}
              lineWidth={20}
              animate
              paddingAngle={1}
              // rounded
              label
              lengthAngle={-360}
              labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif',
              }}
              labelPosition={60}
            />
          </span>
        )}
        <span
          role="presentation"
          className="remove"
          style={removeStyle}
          onClick={() => {
            this.onRemoveItem(i);
          }}
        >
          x
        </span>
      </div>
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <button type="button" onClick={this.onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onGridLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {map(items, this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

AddRemoveLayout.defaultProps = {
  className: 'layout',
  cols: {
    lg: 12, md: 10, sm: 6, xs: 4, xxs: 2,
  },
  rowHeight: 100,
};

export default AddRemoveLayout;
