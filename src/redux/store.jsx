import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "./reducer/root_reducer";

const preloadedState = {}

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
);

export default store;
