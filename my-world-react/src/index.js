import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import App from './App';
import MainPage from './MainPage';
import Books from './Books';
import { BrowserRouter} from 'react-router-dom';
import { Route, IndexRoute } from 'react-router';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change 
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
