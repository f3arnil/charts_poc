import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import Card from './Card';
import ItemTypes from './ItemTypes';
import { WIDGET_TYPES } from '@/constants/widgetTypes';

const style = {
  width: 400,
};

const ITEMS = [
  {
    id: 1,
    text: 'Write a cool JS library',
    type: WIDGET_TYPES.SYSTEM_STATUS,
  },
  {
    id: 2,
    text: 'Make it generic enough',
    type: WIDGET_TYPES.SYSTEM_STATUS,
  },
  {
    id: 3,
    text: 'Write README',
    type: WIDGET_TYPES.SWAP_CURWES,
  },
  {
    id: 4,
    text: 'Create some examples',
    type: WIDGET_TYPES.SQ_DATENBAUM,
  },
  {
    id: 5,
    text: 'Spam in Twitter and IRC to promote it',
    type: WIDGET_TYPES.TX_DATENBAUM,
  },
  {
    id: 6,
    text: '???',
    type: WIDGET_TYPES.SCHEDULING,
  },
  {
    id: 7,
    text: 'PROFIT',
    type: WIDGET_TYPES.RSX_BOTTOM_UP,
  },
];

const Container = () => {
  const [cards, setCards] = useState(ITEMS);

  const findCard = (id) => {
    const card = cards.filter(c => `${c.id}` === id)[0];
    return {
      card,
      index: cards.indexOf(card),
    };
  };

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    setCards(
      update(cards, {
        $splice: [[index, 1], [atIndex, 0, card]],
      }),
    );
  };

  const [, drop] = useDrop({ accept: ItemTypes.CARD });

  return (
    <>
      <div ref={drop} style={style}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={`${card.id}`}
            text={card.text}
            moveCard={moveCard}
            findCard={findCard}
            type={card.type}
          />
        ))}
      </div>
    </>
  );
};

export default Container;
