import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { Upload } from "./home/upload/upload_card";
import { NotFound } from "./404/not_found";
import {Configuration} from "./configuration/configuration";

export const Body = () => {
    return (
        <div className="container-fluid h-75 p-4">
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/upload' component={Upload} exact />
                <Route path='/configure' component={Configuration} exact />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
