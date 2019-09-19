import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { userReducer } from './redux/reducers.js';

//middlewares
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

//saga
import { watchFetchUsersAsync } from './redux/sagas.js';

//middleware setup
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

//redux store set up
const store = createStore(userReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(watchFetchUsersAsync);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));