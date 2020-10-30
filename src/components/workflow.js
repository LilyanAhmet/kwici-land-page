import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "./section-title"

/* resources */
import Image from "../images/rectangle.png"
const Workflow = () => {
  return (
    <div className="workflow" id='process'>
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Workflow" />
          </Col>
        </Row>
        <Row>
          <img className="img" src={Image} />
        </Row>
        <Row>
          <Col sm={4}>
            <div className="box">
              <h5>Registered Couriers</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Registered Couriers</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="box">
              <h5>Registered Couriers</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Workflow
