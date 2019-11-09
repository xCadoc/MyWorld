import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
/**
 * Import all page components here
 */
import NavBar from './NavBar';
import MainPage from './MainPage';
import Books from './Books';
import BookWorkshop from './BookWorkshop';
/**
 * Constants for the paths. 
 * Use them for the routes.
 */
const booksRoute = "/books";
const bookWorkshopRoute = "/bookWorkshop";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <BrowserRouter>
    <div>
	  <NavBar />    
      <Route path="/" component={MainPage} />
      <Route path={booksRoute} component={Books} />
      <Route path={bookWorkshopRoute} component={BookWorkshop} />
    </div>
  </BrowserRouter>
);