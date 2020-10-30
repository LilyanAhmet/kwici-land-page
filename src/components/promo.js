import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Button from "../components/Button"
import GooglePlay from "../images/googl-play.svg"
import AppStore from "../images/app-store.svg"
import Huwaui from "../images/huawi.svg"
const Promo = () => {
  return (
    <Container>
      <div className="promo" id="promo">
        <Row>
          <Col xs={10}>
            <h1>Everybody can be a Courier for Anything</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={9} md={5}>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.’’
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}  md={3}>
            <div className="button">
              <a href="#">
                <Button text="Get Started" />
              </a>
            </div>
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

export default Promo
