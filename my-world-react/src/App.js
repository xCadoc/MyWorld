import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Books from './Books';
import BookWorkshop from './BookWorkshop';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import background from'./images/background_paper_1.png';

import { withAuthenticator } from 'aws-amplify-react' 

/**
 * Constants for the paths. 
 * Use them for the routes.
 */
const booksRoute = "/books";
const bookWorkshopRoute = "/bookWorkshop";

const App = () => (
  <BrowserRouter>
    <div>
	  <NavBar />    
      <Route exact path="/" component={MainPage} />
      <Route path={booksRoute} component={Books} />
      <Route path={bookWorkshopRoute} component={BookWorkshop} />
    </div>
  </BrowserRouter>
);

export default withAuthenticator(App);
