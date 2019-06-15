import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Books from './Books';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

/**
 * Constants for the paths. 
 * Use them for the routes.
 */
const booksRoute = "/books";

const App = () => (
  <BrowserRouter>
    <div>
	  <NavBar />    
      <Route exact path="/" component={MainPage} />
      <Route path={booksRoute} component={Books} />
    </div>
  </BrowserRouter>
);


export default App;
