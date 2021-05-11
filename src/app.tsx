import React from 'react';
import { Header } from './component/header/header';
import { Body } from './component/body/body'

export const App = () => {
    return (
        <div className="App h-100">
            <Header />
            <Body />
        </div>
    );
}
