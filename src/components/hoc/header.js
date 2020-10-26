import React from "react"
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap"

import Button from '../Button'
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><div className="Rectangle"></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Process</Nav.Link>
              <Nav.Link href="#pricing">How it Works?</Nav.Link>
              <Nav.Link href="#pricing">Product</Nav.Link>
              <Nav.Link href="#pricing">Testimonials</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><Button text="Login"/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
