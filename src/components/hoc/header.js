import React from "react"
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from '../Button'
import Logo from '../../images/quicki-logo.svg'
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" fixed="top">
        <Container>
          <AnchorLink href="#promo" ><img className="logo" src={Logo}/></AnchorLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto" style={{marginLeft:"30px"}}>
              <AnchorLink className="nav-link " href="#features">Features & Benefits</AnchorLink>
              <AnchorLink className="nav-link " href="#process">Workflow</AnchorLink>
              <AnchorLink className="nav-link " href="#product">Application</AnchorLink>
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
