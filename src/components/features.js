import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "./section-title"

/* Resources*/
import FoodDilvery from "../images/food-delivery.svg"
import PaymentMethod from "../images/payment-method.svg"
import Close from "../images/close.svg"
import Date from "../images/4.svg"
import Track from "../images/order-tracking.svg"
import Become from "../images/6.svg"
const Features = () => {
  return (
    <div className="features">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Features & Benefits" />
          </Col>
        </Row>
        <div className="box">
          <Row>
            <Col sm={12} md={4}>
              <div className="feature">
                <img src={FoodDilvery} />
                <h5>Get Same-Day Delivery</h5>
                <div className="Rectangle-2"></div>
                <p>
                Same-Day Delivery: Order for delivery from local supermarkets.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="feature">
                <img src={PaymentMethod} />
                <h5>Save Time & Money</h5>
                <div className="Rectangle-2"></div>
                <p>
                Make your purchase from the comfort of your own home and receive the delivery of the articles in only 2 hours.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="feature">
                <img src={Close} />
                <h5>Mobile App and Website</h5>
                <div className="Rectangle-2"></div>
                <p>
                Mobile App and Website: A secure mobile app and desktop app offers a safe and easy way to do your shopping.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="box box-bottom">
          <Row>
            <Col sm={12} md={4}>
              <div className="feature">
                <img src={Date} />
                <h5>Choosing Delivery Date and Time</h5>
                <div className="Rectangle-2"></div>
                <p>Receive your order on the day and within the time range of your choice.</p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="feature">
                <img src={Track} />
                <h5>Order Status <br/> Tracking </h5>
                <div className="Rectangle-2"></div>
                <p>
                Get the items you love delivered or ready for pickup in as little as 2 hours. Track your order status instantly. 
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="feature">
                <img src={Become} />
                <h5>Every Customer Can Become a Volunteer</h5>
                <div className="Rectangle-2"></div>
                <p>Everyone can volunteer in their spare time to help the community.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Features
