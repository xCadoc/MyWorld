import React, {Component} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component {
	render() {
	  	return (
            <div>
                <Navbar variant="dark">
                    <Navbar.Brand href="/">Book World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/books">Books</Nav.Link>
                            <Nav.Link href="/bookWorkshop">Book Workshop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    	)
	}
}
export default NavBar;
