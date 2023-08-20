import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="container">
        <Navbar bg="transparent" expand="lg" variant="dark" className="navbar-fixed">
        <Navbar.Brand href="#">Amperfect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-elements">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#appointment">Appointment</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header