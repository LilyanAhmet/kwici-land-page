import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../components/Button"
const Business = () => {
  return (
    <Container>
      <div className="business">
        <Row>
          <Col md={6} sm="12">
            <div
              className="Rectangle"
              style={{ backgroundColor: "#fff", marginBottom: "30px" }}
            ></div>
            <h1>
              <span>KWICKI</span> Business
            </h1>
            <p>
              The best way to setup and organize your e-commerce business
              deliveries
            </p>
            <Button text="Contact us" />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Business
