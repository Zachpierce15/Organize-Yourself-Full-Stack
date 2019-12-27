import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DragDropContext } from 'react-beautiful-dnd';


import App from './components/app.jsx';
import reducers from './reducers';

const onDragEnd = results => {
   console.log('This is getting here in DRAGEND ') 
}

const onBeforeCapture = () => {
  console.log('on before capture');
};

const onBeforeDragStart = () => {
  console.log('on before drag start');
};

const onDragStart = () => {
  console.log('on drag start');
};
const onDragUpdate = () => {
  console.log('on drag update');
};

ReactDOM.render(
  <DragDropContext
    onBeforeCapture={onBeforeCapture}
    onBeforeDragStart={onBeforeDragStart}
    onDragStart={onDragStart}
    onDragUpdate={onDragUpdate}
    onDragEnd={onDragEnd}
  >
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </DragDropContext>,
 document.getElementById('app')
);