import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
const  NavbarAdmin = () => {
    return (
        <div className='NavAdmin'>
            
            <Navbar collapseOnSelect expand="lg" variant="light">

  <Navbar.Brand href="#home">DashBorad</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavbarAdmin
