import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <Container>
          <div className="align-bottom">
            <Row>
              <Col className="text-center py-3">
                <MDBBtn
                  rippleColor="dark"
                  color="link"
                  floating
                  size="lg"
                  className="text-dark m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab className="fa-twitter" />
                </MDBBtn>
                <MDBBtn
                  rippleColor="dark"
                  color="link"
                  floating
                  size="lg"
                  className="text-dark m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab className="fa-google" />
                </MDBBtn>
                <MDBBtn
                  rippleColor="dark"
                  color="link"
                  floating
                  size="lg"
                  className="text-dark m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab className="fa-instagram" />
                </MDBBtn>
                <MDBBtn
                  rippleColor="dark"
                  color="link"
                  floating
                  size="lg"
                  className="text-dark m-1"
                  href="#!"
                  role="button"
                >
                  <MDBIcon fab className="fa-linkedin" />
                </MDBBtn>
                Copyright &copy; Pretty Stones
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
