import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Button from "../components/Button"
import Logo from "../images/quicki-logo.svg"
const Business = () => {
  return (
    <Container>
      <div className="business">
        <Row>
          <Col md={6} sm="12">
            <div style={{ marginBottom: "30px" }}>
              <img className="logo" src={Logo} />
            </div>

            <p>Let all your orders come to your door without leaving home.</p>
            <AnchorLink href="#contact">
              <Button text="Contact us" />
            </AnchorLink>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Business
