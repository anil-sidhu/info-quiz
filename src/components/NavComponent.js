import React from 'react';
import {
  Link
} from "react-router-dom";
import { Navbar, NavDropdown, FormControl, Form, Button, Nav } from 'react-bootstrap/';
const NavComponent = props => {
  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};



export default NavComponent;