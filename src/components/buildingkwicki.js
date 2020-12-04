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
                  <h6>Only the hours you want</h6>
                  <p>
                    Be your own boss. Flexible hours, competitive incomes and
                    the opportunity to get to know your city delivering
                    outdoors. Contact us and collaborate with us in less than
                    24h.
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
