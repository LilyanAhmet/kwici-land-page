import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "./section-title"

/* resources */
import Image from "../images/rectangle.png"
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
              <h5>Registered Couriers</h5>
              <p>
                You can be a courier on Kwicki easily. Couriers can register to
                Kwicki to start carrying deliveries as registered courier.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Registered Companies and Persons</h5>
              <p>
                As a company, offer your customers Kwicki courier option to
                provide them the best delivery system. As a customer, select
                Kiwicki carrier option while shopping from registered companies
                and e-commerce websites to receive the ultimate service.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Choose Delivery Time</h5>
              <p>
                As a customer. you can choose the delivery timing from the
                dashboard up to 30 minutes precision.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Workflow
