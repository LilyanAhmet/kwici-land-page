import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../components/Button"
import AnchorLink from "react-anchor-link-smooth-scroll"
/* resources */
import Courier from "../images/becourier.svg"

const Buildingkwicki = () => {
  return (
    <div className="building">
      <Container>
        <Row>
          <Col>
            <h1>
              <span>We’re building Quicki </span> together!
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            <div className="box">
              <Row>
                <Col md={6} sm={12}>
                  <img src={Courier} />
                </Col>
                <Col md={6} sm={12}>
                  <h3>Be Our Volunteer</h3>
                  <h6>Arrange your working hours as you wish</h6>
                  <p>
                    Be your own boss. Flexible working hours, a helping hand for
                    people who need you and the opportunity to get to know your
                    city even better. Contact us and work with us in less than
                    24 hours.
                  </p>
                  <AnchorLink href="#contact">
                    <Button text="Register Now" />
                  </AnchorLink>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Buildingkwicki
