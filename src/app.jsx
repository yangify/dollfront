import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './component/nav_bar/nav_bar';
import { Body } from './component/body/body'
import store from "./redux/store";

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App h-100">
                    <NavBar />
                    <Body />
                </div>
            </Router>
        </Provider>
    );
}
