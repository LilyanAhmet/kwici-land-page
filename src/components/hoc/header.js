import React from "react"
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from '../Button'
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" fixed="top">
        <Container>
          <AnchorLink href="#promo"><div className="Rectangle"></div></AnchorLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto" style={{marginLeft:"30px"}}>
              <AnchorLink className="nav-link " href="#features">Features</AnchorLink>
              <AnchorLink className="nav-link " href="#process">Process</AnchorLink>
              <AnchorLink className="nav-link " href="#how">How it Works?</AnchorLink>
              <AnchorLink className="nav-link " href="#product">Product</AnchorLink>
              <AnchorLink className="nav-link " href="#contact">Contact</AnchorLink>
            </Nav>
            <Nav>
              <AnchorLink href="#deets"><Button text="Login"/></AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
