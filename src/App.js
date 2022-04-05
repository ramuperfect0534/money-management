// eslint-disable-next-line
import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Footer from "./components/footer";
import { Form, Container, Row, Col } from "react-bootstrap";
import Form2 from "./components/form2";
import { useEffect } from "react";
import Mini from "./components/mini";
import Boxes from "./components/boxes";
import { useNavigate } from "react-router";

// import Expensive from "./components/Expensive";

const App = (props) => {
  let navigate = useNavigate();

  window.addEventListener("popstate", (event) => {
    window.location.reload();
  });

  useEffect(() => {
    if (props.data.registraton.length == 0) {
      navigate("/");
    }
  }, [props]);

  if (props.data.registraton.length == 0) {
    return <div>{navigate("/")}</div>;
  } else {
    return (
      <div>
        <Header name={props.data.registraton[0].name} />
        <Container style={{ maxWidth: "100%" }}>
          <Row>
            <Col xs={6} style={{ padding: "2%" }}>
              <Boxes />
              <Row style={{ marginTop: "2%", marginBottom: "2%" }}>
                Dear &nbsp;
                <span style={{ textTransform: "capitalize" }}>
                  {props.data.registraton[0].name}
                </span>
                , Please complete this form then you will understand the
                process.
              </Row>
              <Row className="appform">
                <Form2
                  name={props.data.registraton[0].name}
                  phone={props.data.registraton[0].phone}
                />
              </Row>
              <Row
                style={{
                  color: "rgb(171, 0, 0)",
                  display: "block",
                  textAlign: "center",
                }}
              >
                <div>
                  WARNING!!! Windows Back/Forward buttons are prohibited
                </div>
              </Row>
            </Col>
            <Col xs={6} style={{ background: "#e6e6e6", padding: "2%" }}>
              <Mini name={props.data.registraton[0].name} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row></Row>
        </Container>
        <Footer />
      </div>
    );
  }
};
function mapstate(state) {
  return {
    data: state,
  };
}
const dispatchprops = () => {};
export default connect(mapstate, dispatchprops)(App);
