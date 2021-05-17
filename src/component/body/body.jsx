import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { NotFound } from "../404/not_found";

export const Body = () => {
    return (
        <div className="container-fluid h-75 p-4">
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
