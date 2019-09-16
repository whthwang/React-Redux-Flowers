import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Users.jsx';
import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './redux/reducers.js';
import { Provider } from 'react-redux';
//middlewares
import logger from 'redux-logger';


//store arguments: combineReducer, middlewares
const store = createStore(userReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><Users /></Provider>, document.getElementById('app'));