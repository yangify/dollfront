import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./home/home";
import { Upload } from "./home/upload/upload_card";
import Configuration from "./configuration/configuration";
import { NotFound } from "./404/not_found";
import * as Pages from "../../pages";

export const Body = () => {
    return (
        <div className="container-fluid h-75 p-4">
            <Switch>
                <Route path={Pages.HOME.link} component={Home} exact />
                <Route path={Pages.UPLOAD.link} component={Upload} exact />
                <Route path={Pages.CONFIGURATION.link} component={Configuration} exact />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
