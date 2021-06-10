import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducer from "./reducer/root_reducer";

const preloadedState = {}

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware)

const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middlewareEnhancer)
);

export default store;
