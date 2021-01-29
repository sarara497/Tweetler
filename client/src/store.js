import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import logger from 'redux-logger';
import persistedReducer from './reducers/rootReducer';

// const initialState = {};

// const middleware = [thunk];

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
    // initialState,
    // compose(
    //     applyMiddleware(...middleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store;