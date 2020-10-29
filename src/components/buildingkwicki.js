import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../components/Button"
/* resources */
import Courier from "../images/becourier.svg"
import Partner from "../images/partners.svg"

const Buildingkwicki = () => {
  return (
    <div className="building">
      <Container>
          <Row>
              <Col>
              <h1><span>We’re building Kwicki </span> together!</h1>
              </Col>
          </Row>
        <Row>
          <Col md={6} sm={12}>
            <div className="box">
              <img src={Courier} />
              <h3>Be Our Couriers</h3>
              <h6>Only the hours you want</h6>
              <p>
                Be your own boss. Flexible hours, competitive incomes and the
                opportunity to get to know your city delivering outdoors.
                Contact us and collaborate with us in less than 24h.
              </p>
              <Button text="Contact us" />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="box">
              <img src={Courier} />
              <h3>Be Our Couriers</h3>
              <h6>Only the hours you want</h6>
              <p>
                Be your own boss. Flexible hours, competitive incomes and the
                opportunity to get to know your city delivering outdoors.
                Contact us and collaborate with us in less than 24h.
              </p>
              <Button text="Contact us" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Buildingkwicki
