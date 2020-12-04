import React from "react"
import { Container, Row, Col } from "react-bootstrap"

/* reources*/
import Icon from "../../images/quicki.svg"
import Facebook from "../../images/001-facebook.svg"
import Instagram from "../../images/002-instagram.svg"
import Twitter from "../../images/003-twitter.svg"
import Seperator from '../../images/separator.svg'
const Footer = () => {
  return (
    <div className="footer">
      <Container>
          <Row>
              <img src={Seperator} style={{paddingBottom:"30px",width:"100%"}}/>
          </Row>
        <Row>
          <Col xs={12} md={3}>
            <div className="left">
              <p>
                © {new Date().getFullYear()} Copyright
                {` `}
                <a href="https://www.qimia.io">QUICKI</a>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="middle">
              <img src={Icon} />
              <div className="bottom">
                <a href="#">Impressum</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="social">
              <a href="#">
                <img src={Facebook} />
              </a>
              <a href="#">
                <img src={Instagram} />
              </a>
              <a href="#">
                <img src={Twitter} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
