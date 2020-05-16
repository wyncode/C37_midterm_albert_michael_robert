import React from 'react';
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap';

const Nbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Brewskis</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default Nbar;
