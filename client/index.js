import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Users from './components/Users.jsx';
import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './redux/reducers.js';
import { Provider } from 'react-redux';
//middlewares
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
//import saga
import { watchFetchUsersAsync } from './redux/sagas.js';
// import rootSaga from './redux/sagas.js';



const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

//store arguments: combineReducer, middlewares
const store = createStore(userReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(watchFetchUsersAsync);
// sagaMiddleware.run(rootSaga); //the rootSaga function


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));