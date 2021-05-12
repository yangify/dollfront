import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { Upload } from "./upload/upload";
import { NotFound } from "../404/not_found";
import React from "react";

export const Body = () => {
    return (
        <div className="container-fluid h-75 p-4">
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/upload' component={Upload} exact/>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
