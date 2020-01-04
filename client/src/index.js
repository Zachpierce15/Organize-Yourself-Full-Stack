import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app.jsx';
import reducers from './Redux/reducers';



ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
 document.getElementById('app')
);