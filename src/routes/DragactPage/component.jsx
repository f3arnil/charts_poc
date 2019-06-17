/* eslint-disable */
import React from 'react';
import _ from "lodash";
import { Dragact } from 'dragact';

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

const itemsList = [
  {
    i: '0',
    key: 'item-0',
    content: <SystemStatusWidget />,
    GridX: 0,
    GridY: 0,
    w: 3,
    h: 2,
  },
  {
    i: '1',
    key: 'item-1',
    content: <SwapCurwesWidget />,
    GridX: 3,
    GridY: 0,
    w: 3,
    h: 2,
  },
  {
    i: '2',
    key: 'item-2',
    content: <GoviCurwesWidget />,
    GridX: 6,
    GridY: 0,
    w: 3,
    h: 2,
  },
  {
    i: '3',
    key: 'item-3',
    content: <KursWidget />,
    GridX: 9,
    GridY: 0,
    w: 3,
    h: 2,
  },
  {
    i: '4',
    key: 'item-4',
    content: <GruppeWidget />,
    GridX: 12,
    GridY: 0,
    w: 3,
    h: 2,
  },
  {
    i: '5',
    key: 'item-5',
    content: <TXDatenBaumWidget />,
    GridX: 0,
    GridY: 2,
    w: 3,
    h: 2,
  },
  {
    i: '6',
    key: 'item-6',
    content: <CheckScoreCardWidget />,
    GridX: 3,
    GridY: 2,
    w: 9,
    h: 6,
  },
  {
    i: '7',
    key: 'item-7',
    content: <SchedulingWidget />,
    GridX: 12,
    GridY: 2,
    w: 3,
    h: 6,
  },
  {
    i: '8',
    key: 'item-8',
    content: <SQDatenBaumWidget />,
    GridX: 0,
    GridY: 4,
    w: 3,
    h: 2,
  },
  {
    i: '9',
    key: 'item-9',
    content: <RSXBottomUpWidget />,
    GridX: 0,
    GridY: 6,
    w: 3,
    h: 2,
  },
];

class DragactLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: itemsList,
    };

    this.getBlockStyle = this.getBlockStyle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles(element) {
    switch (element) {
      case 'delete': {
        return {
          position: 'absolute',
          width: 5,
          height: 5,
          right: 15,
          top: 5,
          cursor: 'pointer',
          fontSize: 20,
          color: 'red'
        };
      }
      case 'resize': {
        return {
          position: 'absolute',
          width: 10,
          height: 10,
          right: 2,
          bottom: 2,
          cursor: 'se-resize',
          borderRight: '2px solid rgba(15,15,15,0.2)',
          borderBottom: '2px solid rgba(15,15,15,0.2)'
        };
      }
      default: {
        return {};
      }
    }
  }

  handleDelete(key) {
    const items = this.state.items.filter(item => {
      if (item.key !== key) {
        return item
      }
    })
    this.setState({ items });
  };

  getBlockStyle(isDragging) {
    return {
      background: isDragging ? 'red' : 'white',
      color: isDragging ? 'white' : 'black',
    };
  };

  render() {
    console.warn(this.state.items);
    return (
      <Dragact
        layout={this.state.items}
        col={15}
        width={1800}
        rowHeight={150}
        margin={[5, 5]}
        className='plant-layout'
        style={{ background: '#333' }}
        placeholder={true}
      >
        {(item, provided) => {
          return (
            <div
              {...provided.props}
              {...provided.dragHandle}
              style={{
                ...provided.props.style,
                ...this.getBlockStyle(provided.isDragging)
              }}
            >
              {item.content}
              <span
                {...provided.resizeHandle}
                style={this.getStyles('resize')}
              />
              <span
                style={this.getStyles('delete')}
                onClick={() => this.handleDelete(item.key)}
              >
                x
              </span>
            </div>
          )
        }}
      </Dragact> 
    );
  }
}

export default DragactLayout;
