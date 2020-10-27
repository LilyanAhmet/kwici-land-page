import React from "react"
import { Container, Row, Col } from "react-bootstrap"

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
              <form>
                <div class="input-group mycustom">
                  <input
                    type="text"
                    class="form-control rounded-0"
                    id="validationDefaultUsername"
                    placeholder="Enter your email"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                  <div class="input-group-prepend">
                    <input
                      type="submit"
                      vlaue="submit"
                      class="btn btn-primary btn-sm newletter-btn"
                      id="inputGroupPrepend2"
                    />
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
