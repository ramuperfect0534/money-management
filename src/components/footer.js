import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  const myComponentStyle = {
    color: "#fff",
  };

  return (
    <div>
      <Container className="footer">
        <Container style={myComponentStyle}>
          <Row className="justify-content-md-center">
            <Col sm="4" xs="4">
              <Row>
                <h5>Information</h5>
              </Row>
              <Row>
                <div
                  style={{
                    width: "40%",
                    height: "2px",
                    backgroundColor: "#fff",
                    marginTop: "2%",
                    marginBottom: "2%",
                  }}
                ></div>
              </Row>
              <Row>- Our Application</Row>
              <Row>- About Us</Row>
              <Row>- Contact Us</Row>
            </Col>
            <Col sm="4" xs="4">
              <Row>
                <h5>Social Media</h5>
              </Row>
              <Row>
                <div
                  style={{
                    width: "42%",
                    height: "2px",
                    backgroundColor: "#fff",
                    marginTop: "2%",
                    marginBottom: "2%",
                  }}
                ></div>
              </Row>
              <Row>Follow us on Twitter</Row>
              <Row>Follow us on Facebook</Row>
              <Row>Follow us on Linkedin</Row>
            </Col>
            <Col sm="4" xs="4">
              <Row>
                <h5>Budget For Saving</h5>
              </Row>
              <Row>
                <div
                  style={{
                    width: "60%",
                    height: "2px",
                    backgroundColor: "#fff",
                    marginTop: "2%",
                    marginBottom: "2%",
                  }}
                ></div>
              </Row>
              <Row style={{ fontSize: "10px", textAlign: "justify" }}>
                Once you have an idea of what you spend in a month, you can
                begin to organize your recorded expenses into a workable budget.
                Your budget should outline how your expenses measure up to your
                income—so you can plan your spending and limit overspending. Be
                sure to factor in expenses that occur regularly but not every
                month, such as car maintenance.
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default footer;
