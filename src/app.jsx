import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './component/header/header';
import { Body } from './component/body/body'
import store from "./redux/store";

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App h-100">
                    <Header />
                    <Body />
                </div>
            </Router>
        </Provider>
    );
}
