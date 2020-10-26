import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "./section-title"

/* Resources*/
import FoodDilvery from "../images/food-delivery.svg"
import PaymentMethod from '../images/payment-method.svg'
import Close from '../images/close.svg'

const Features = () => {
  return (
    <div className="features">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Features" />
          </Col>
        </Row>
        <div className="box">
          <Row>
            <Col>
              <div className="feature">
                <img src={FoodDilvery} />
                <h5>Get Same-Day Delivery</h5>
                <div className="Rectangle-2"></div>
                <p>
                  Order for delivery or pickup from local stores in cities like
                  Cologne, Hannover, San Diego, San Francisco and many more.
                </p>
              </div>
            </Col>
            <Col>
              <div className="feature">
                <img src={PaymentMethod} />
                <h5>Save Time & Money</h5>
                <div className="Rectangle-2"></div>
                <p>
                  Order for delivery or pickup from local stores in cities like
                  Cologne, Hannover, San Diego, San Francisco and many more.
                </p>
              </div>
            </Col>
            <Col>
              <div className="feature">
                <img src={Close} />
                <h5>Secure Mobile Payment</h5>
                <div className="Rectangle-2"></div>
                <p>
                  Order for delivery or pickup from local stores in cities like
                  Cologne, Hannover, San Diego, San Francisco and many more.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Features
