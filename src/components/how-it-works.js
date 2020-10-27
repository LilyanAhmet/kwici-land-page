import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "./section-title"
import Video from "./video"
/* resources */
import Anything from '../images/rsz_anything.png'
const HowItWorks = () => {
  return (
    <div className="how">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="How It Works?" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={Anything} style={{margin:"auto",display:"block",paddingTop:"50px"}}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="video">
              <Video
                videoSrcURL="https://www.youtube.com/embed/UgmfSb2kakM"
                videoTitle="Qimia Logistics.AI - Powerful Logistic Platform"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HowItWorks
