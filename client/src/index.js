import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RootReducer from './reducers/index';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
