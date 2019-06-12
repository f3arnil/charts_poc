import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Container from '@/components/HomePage/Content';

const HomePage = () => {
  return (
    <div className="home-page-content">
      <DragDropContextProvider backend={HTML5Backend}>
        <Container />
      </DragDropContextProvider>
    </div>
  );
};

export default HomePage;
