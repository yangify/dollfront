import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './component/header/header';
import { Body } from './component/body/body'

export const App = () => {
    return (
        <Router>
            <div className="App h-100">
                <Header />
                <Body />
            </div>
        </Router>
    );
}
