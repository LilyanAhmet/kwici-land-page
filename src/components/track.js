import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../components/Button"
import GooglePlay from "../images/googl-play.svg"
import AppStore from "../images/app-store.svg"
import Huwaui from "../images/huawi.svg"
const Track = () => {
  return (
    <Container>
      <div className="track">
        <Row>
          <Col md={6} sm="12">
            <div
              className="Rectangle"
              style={{ backgroundColor: "#fff", marginBottom: "30px" }}
            ></div>
            <h1>
              Track your deliveries with <span>Kwicki App</span>
            </h1>
            <p>
              The best way to setup and organize your e-commerce business
              deliveries
            </p>
          </Col>
        </Row>
        <div className="apps">
          <Row>
            <Col>
              <a href="#">
                {" "}
                <img src={AppStore} />{" "}
              </a>
            </Col>
            <Col>
              <a href="#">
                {" "}
                <img src={GooglePlay} />
              </a>
            </Col>

            <Col>
              <a href="#">
                {" "}
                <img src={Huwaui} />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default Track
