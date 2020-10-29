import React from "react"
import { Container, Row, Col } from "react-bootstrap"
/* resources */
import Ca5 from '../images/c-a-5.svg'
import Kaufhof from '../images/kaufhof.svg'
import Woolworths from '../images/woolworths-5.svg'
const Storepartners = () => {
  return (
    <Container>
      <div className="partners">
          <Row>
              <Col sm={12} md={4}>
                <h2 >Store Partners</h2>
              </Col>
          </Row>
          <Row>
              <Col sm={12} md={4}>
                  <img className="kaufhof" src={Kaufhof} />
              </Col>
              <Col sm={12} md={4}>
                  <img className="ca5" src={Ca5}/>
              </Col>
              <Col sm={12} md={4}>
                  <img className="woolworths" src={Woolworths} />
              </Col>
          </Row>
      </div>
    </Container>
  )
}

export default Storepartners
