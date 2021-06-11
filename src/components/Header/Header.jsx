import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Developer Saimon </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#home">হোম পেইজ </Nav.Link>
      <Nav.Link href="#link">বাজার হিসাব</Nav.Link>
      <NavDropdown title="মিল হিসাব " id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">সাইমন </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">আরিফ </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">মোবারাক </NavDropdown.Item>
        <NavDropdown.Divider />
       
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
            
        </>
    );
};

export default Header;