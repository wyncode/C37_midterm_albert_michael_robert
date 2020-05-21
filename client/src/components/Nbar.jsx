import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import '../App.css';

const Nbar = () => {
  return (
    <Navbar className="bg-color" variant="light">
      <Navbar.Brand href="/">Brewskis</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default Nbar;