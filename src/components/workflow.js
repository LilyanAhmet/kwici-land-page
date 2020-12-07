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
                You can easily join Quicki as a volunteer. Volunteers can
                register on Quicki to directly start making deliveries.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Order Fast & Easy</h5>
              <p>
                Order all your requests fast and easy by monitoring all your
                orders in detail.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>User-friendly Design</h5>
              <p>The user-friendly design facilitates the ordering process.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Workflow
