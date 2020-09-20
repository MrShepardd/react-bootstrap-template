import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './service-worker';
import App from "./app";
import ErrorBoundry from './components/error-boundry'

import "./assets/scss/styles.scss";

ReactDOM.render(
    <ErrorBoundry>
        <App/>
    </ErrorBoundry>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();