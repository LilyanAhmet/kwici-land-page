import React from "react"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import SectionTitle from "./section-title"
/* resources*/
import Mobile from "../images/mobile.svg"
import Desktop from "../images/desktop.svg"
import ProductImg from "../images/rsz_product.png"
import Fast from "../images/time.svg"
import Support from "../images/communication.svg"
import Statistics from "../images/chart.svg"
import Delivery from "../images/pen.svg"
const Product = () => {
  return (
    <div className="product">
      <div className="bg"></div>
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Product" />
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col md={5} sm={12}>
            <img src={ProductImg} style={{ width: "100%" }} />
          </Col>
          <Col md={7} sm={12}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="mobile">
              <Nav justify variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="mobile">
                    <img src={Mobile} />
                    Mobile Application
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="desktop">
                    <img src={Desktop} />
                    Desktop Application
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="mobile">
                  <div>
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="couriers"
                    >
                      <Nav justify variant="tabs">
                        <Nav.Item>
                          <Nav.Link eventKey="couriers">Couriers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="customer">Customer</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="couriers">
                        <div className="details">
                            <div className="element">
                              <img src={Fast} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                  {" "}
                                  Fast and easy integration to your e-commerce
                                  system.
                                </p>
                              </div>
                            </div>
                            <div className="element">
                              <img src={Support} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                We are here to help! Kwicki team is ready to support you on 7/24 for your orders and questions.
                                </p>
                              </div>
                            </div>
                            <div className="element">
                              <img src={Statistics} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                Get your statistics reports about your sales with one click from the Kwicki dashboard
                                </p>
                              </div>
                            </div>
                            <div className="element">
                              <img src={Delivery} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                  {" "}
                                  A wide delivery network system match customers with a convenient courier on Kwicki system. Kwicki system includes courier on foot, with a bike, motorbike, or car. 
                                </p>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="customer">
                        <div className="details">
                            <div className="element">
                              <img src={Fast} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                  {" "}
                                  Fast and easy integration to your e-commerce
                                  system.
                                </p>
                              </div>
                            </div>
                            <div className="element">
                              <img src={Support} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                We are here to help! Kwicki team is ready to support you on 7/24 for your orders and questions.
                                </p>
                              </div>
                            </div>
                            <div className="element">
                              <img src={Statistics} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                Get your statistics reports about your sales with one click from the Kwicki dashboard
                                </p>
                              </div>
                            </div>
                            <div className="element">
                              <img src={Delivery} />
                              <div className="text">
                                <h6>Fast Integration</h6>
                                <p>
                                  {" "}
                                  A wide delivery network system match customers with a convenient courier on Kwicki system. Kwicki system includes courier on foot, with a bike, motorbike, or car. 
                                </p>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="desktop">ssssssssssssssssssssss</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product
