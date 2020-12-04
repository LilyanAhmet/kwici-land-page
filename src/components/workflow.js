import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "./section-title"

/* resources */
import Image from "../images/map.svg"
const Workflow = () => {
  return (
    <div className="workflow" id="process">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Workflow" />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <img className="img" src={Image} />{" "}
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div className="box">
              <h5>Registered Volunteers</h5>
              <p>
                You can be a volunteer on Quicki easily. Volunteers can register
                to Quicki to start carrying deliveries as registered volunteer.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Easy to Repeat Order</h5>
              <p>
                View all your orders in detail and quickly repeat your order
                from the last orders area in your profile.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Choose Delivery Date and Time</h5>
              <p>
                As a customer. you can choose the delivery date and time from
                the order up to 2 hours precision.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Workflow
