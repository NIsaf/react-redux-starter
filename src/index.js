import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './state';
import Router from './Router';
import ErrorBoundary from './containers/ErrorBoundary';
import LiveRegion from './containers/LiveRegion';
import { Helmet } from 'react-helmet';
import { loadStateFromSessionStorage, saveStatetoSessionStorage } from './cache';

const appId = 'EXAMPLE ID'
let cachedState;

if(process.env.NODE_ENV !== 'development') {
    cachedState = loadStateFromSessionStorage(appId);
}

const store = createStore(
    combineReducers(reducers),
    cachedState,
    composeWithDevTools(applyMiddleware(
        thunk
    ))
);

if(process.env.NODE_ENV !== 'development') {
    const saveAllStateToSessionStorage = () => {
        const state = store.getState();
        saveStatetoSessionStorage({
            state,
            appId,
        });
    };

    store.subscribe(saveAllStateToSessionStorage);
}


const App = () => (
    <ErrorBoundary>
        <Provider store={ store }>
            <React.Fragment>
                <Helmet 
                    defaultTitle="I am a default title sitting above the router"
                >
                    <meta name="description" content="Gucci gang, Gucci gang, Gucci gang." />
                </Helmet>
                <LiveRegion />
                <Router />
            </React.Fragment>
        </Provider>
    </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById('root'));
