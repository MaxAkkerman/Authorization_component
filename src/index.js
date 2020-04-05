import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker.js';
import {BrowserRouter} from "react-router-dom";

const app = (
    <App/>
);
ReactDOM.render(<BrowserRouter>{app}</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
