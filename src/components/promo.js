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
            <p style={{ marginBottom: "0px" }}>Same-Day Delivery</p>
            <h1>Everybody can be a Volunteer Hero</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={9} md={5}>
            <p>
              Get your delivery the same day, whenever you need it. Put your
              purchase together and receive your goods quickly and easily. And
              if you don't need a purchase, but you want to help, you can also
              be a volunteer hero with a quick registration at Quicki.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
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
