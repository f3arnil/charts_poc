
import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Example from './content';

function App() {
  return (
    <div className="App">
      <DragDropContextProvider backend={HTML5Backend}>
        <Example />
      </DragDropContextProvider>
    </div>
  );
}

export default App;
