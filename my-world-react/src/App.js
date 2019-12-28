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

/**
 * Constants for the paths. 
 * Use them for the routes.
 */
const booksRoute = "https://master.drcgr8fdnlak0.amplifyapp.com/books";
const bookWorkshopRoute = "https://master.drcgr8fdnlak0.amplifyapp.com/bookWorkshop";

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


export default App;
