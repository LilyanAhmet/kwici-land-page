import React from "react"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import SectionTitle from "./section-title"
/* resources*/
import Mobile from "../images/mobile.svg"
import Desktop from "../images/desktop.svg"
import DesktopMockup from "../images/Desktop_Mockup.svg"
import MobileMockup from "../images/Mobile_Mockup.svg"
const Product = () => {
  return (
    <div className="product" id="product">
      <div className="bg"></div>
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Application" />
          </Col>
        </Row>

        <Row style={{ marginTop: "50px" }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="mobile">
            <Col md={5} sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="mobile">
                  <img
                    src={MobileMockup}
                    style={{ margin: "auto", display: "block", width: "100%" }}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="desktop">
                  <img
                    src={DesktopMockup}
                    style={{ margin: "auto", display: "block", width: "100%" }}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>

            <Col md={7} sm={12}>
              <Nav variant="tabs" className="row">
                <Nav.Item className="col-md-6 col-xs-12">
                  <Nav.Link eventKey="mobile">
                    <img src={Mobile} />
                    Mobile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="col-md-6 col-xs-12">
                  <Nav.Link eventKey="desktop">
                    <img src={Desktop} />
                    Desktop
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="mobile">
                  <div>
                    <h5>Customers</h5>
                    <div className="details">
                      <div className="element">
                        <div className="text">
                          <h6>Order Status Tracking for Customers </h6>
                          <p>
                            Get the items you love delivered in as little as 2
                            hours. Get a confirmation as soon as a volunteer has
                            accepted your order.
                          </p>
                        </div>
                      </div>
                      <div className="element">
                        <div className="text">
                          <h6>Choosing Delivery Date and Time</h6>
                          <p>
                            Receive your order on the day and within the time
                            range of your choice.
                          </p>
                        </div>
                      </div>
                      <div className="element">
                        <div className="text">
                          <h6>Easy to Repeat Order</h6>
                          <p>
                            View all your orders in detail and quickly repeat
                            your order from the last order using the order area
                            in your profile.
                          </p>
                        </div>
                      </div>
                    </div>
                    <h5 style={{ paddingTop: "10px" }}>Volunteer</h5>
                    <div className="details">
                      <div className="element">
                        <div className="text">
                          <h6>Easy Registration for Volunteers</h6>
                          <p>
                            You can easily become a volunteer on Quicki.
                            Volunteers can register on Quicki to carry
                            deliveries as a registered volunteer.
                          </p>
                        </div>
                      </div>
                      <div className="element">
                        <div className="text">
                          <h6>Management Panel for Volunteers</h6>
                          <p>
                            Usability management panel for volunteers. Every
                            volunteer can easily manage the status of all their
                            orders.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="desktop">
                  <div>
                    <h5>Customers</h5>
                    <div className="details">
                      <div className="element">
                        <div className="text">
                          <h6>Order Status Tracking for Customers </h6>
                          <p>
                            Get the items you love delivered in as little as 2
                            hours. Get a confirmation as soon as a volunteer has
                            accepted your order.
                          </p>
                        </div>
                      </div>
                      <div className="element">
                        <div className="text">
                          <h6>Choosing Delivery Date and Time</h6>
                          <p>
                            Receive your order on the day and within the time
                            range of your choice.
                          </p>
                        </div>
                      </div>
                      <div className="element">
                        <div className="text">
                          <h6>Easy to Repeat Order</h6>
                          <p>
                            View all your orders in detail and quickly repeat
                            your order from the last order using the order area
                            in your profile.
                          </p>
                        </div>
                      </div>
                    </div>
                    <h5 style={{ paddingTop: "10px" }}>Volunteer</h5>
                    <div className="details">
                      <div className="element">
                        <div className="text">
                          <h6>Easy Registration for Volunteers</h6>
                          <p>
                            You can easily become a volunteer on Quicki.
                            Volunteers can register on Quicki to carry
                            deliveries as a registered volunteer.
                          </p>
                        </div>
                      </div>
                      <div className="element">
                        <div className="text">
                          <h6>Management Panel for Volunteers</h6>
                          <p>
                            Usability management panel for volunteers. Every
                            volunteer can easily manage the status of all their
                            orders.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Tab.Container>
        </Row>
      </Container>
    </div>
  )
}

export default Product
