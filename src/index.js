/* eslint-disable */
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme.js';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/rootReducer';
import App from './App.jsx';
import mySaga from "./redux/mySQL/saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);