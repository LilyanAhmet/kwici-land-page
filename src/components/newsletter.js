import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Arrow from '../images/path-arrow.svg'
const Newsletter = () => {
  return (
    <div className="newsletter">
      <Container>
        <Row>
          <div className="box">
            <Col>
              <p>
                Subscribe to our newsletter for the latest news and product
                updates straight to your inbox.
              </p>
            </Col>
            <Col>
              <form
                autoComplete="off"
                name="Newsletter"
                method="post"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div class="input-group mycustom">
                  <input type="hidden" name="form-contact" value="Newsletter" />
                  <input
                    type="email"
                    class="form-control rounded-2"
                    id="validationDefaultUsername"
                    placeholder="Enter your email"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                  <div class="input-group-prepend">
                    <button
                      type="submit"
                      vlaue="submit"
                      className="btn btn-indigo px-4 newletter-btn"
                      id="inputGroupPrepend2"
                    >
                      <img style={{margin:"auto", display:"block",width:"20px"}} src={Arrow}/>
                      </button>
                  </div>
                </div>
              </form>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Newsletter
