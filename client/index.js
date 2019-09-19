import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './redux/reducers.js';
import { Provider } from 'react-redux';

//middlewares
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//import saga
import { watchFetchUsersAsync } from './redux/sagas.js';

//middleware setup
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

//sagaMiddleware.run() has to run after the store is set up
const store = createStore(userReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(watchFetchUsersAsync);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));