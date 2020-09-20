import React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { createHashHistory } from "history";
import AdminLayout from "./layouts/Admin.js";

const hist = createHashHistory({
    basename: "", // The base URL of the app (see below)
    hashType: "slash", // The hash type to use (see below)
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

const App = () => {

    return (
        <Router history={hist}>
            <Switch>
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </Router>
    )
};

export default App;