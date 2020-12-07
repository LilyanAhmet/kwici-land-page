import React from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SectionTitle from "./section-title"

/* resources */
import MapIcon from "../images/map-placeholder.svg"
import Message from "../images/message.svg"
import Phone from "../images/phone.svg"
import Arrow from "../images/sendarrow.png"
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <SectionTitle title="Contact Us" />
            <p>
              Got a question? We are here to help! Fill up the form to get in
              touch with us on your enquiries.
            </p>
            <div className="info">
              <ul>
                <li>
                  <img src={MapIcon} style={{ width: "40px" }} />
                  <p>Brüsseler Str. 89-93, 50672 Cologne/Germany</p>
                </li>
                <li>
                  <img src={Phone} style={{ width: "40px" }} />
                  <p>+49 2 21 5796 7940</p>
                </li>
                <li>
                  <img src={Message} style={{ width: "38px" }} />
                  <p>contact@kwicki.de</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div>
              <form
                autoComplete="off"
                name="Contact"
                method="post"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-contact" value="Contact" />
                <div class="form-group">
                  <label for="formGroupExampleInput">Full Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="formGroupExampleInput"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Phone Number*</label>
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Your Message*</label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn  mb-4">
                  Contact us <img src={Arrow} />
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
