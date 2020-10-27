import React from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SectionTitle from "./section-title"

/* resources */
import MapIcon from "../images/map.svg"
import Message from "../images/message.svg"
import Phone from "../images/phone.svg"
import Arrow from '../images/sendarrow.png'
const Contact = () => {
  return (
    <div className="contact">
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
                  <img src={Message} style={{ width: "40px" }} />
                  <p>+49 2 21 5796 7940</p>
                </li>
                <li>
                  <img src={Phone} style={{ width: "38px" }} />
                  <p>contact@kwicki.de</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div>
              <form>
                <input type="hidden" name="form-contact" value="Contact" />
                <div class="form-group">
                  <label for="formGroupExampleInput">Full Name* </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your full name"
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Email Address*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Phone Number*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div class="form-group">
                  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
                    Topic*
                  </label>
                  <select
                    class="custom-select my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Your Message*</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn  mb-2">Contact us <img src={Arrow}/></button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
