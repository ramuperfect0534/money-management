import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo4.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  let navigate = useNavigate();
  const myComponentStyle = {
    color: "#fff",
  };
  // useEffect(() => {
  //   console.log("from parent ", props.name);
  // }, [props]);

  return (
    <div>
      <Container className="header">
        <Container style={myComponentStyle}>
          <Row className="justify-content-md-center">
            <Col sm="4" xs="4">
              <img alt="Logo" style={{ width: "20%" }} src={Logo}></img>
            </Col>
            <Col sm="7" xs="7">
              <Row style={{ marginTop: "4%" }}>
                <h6>
                  Hello{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {props.name}
                  </span>
                  , Welcome to Money Management Application
                </h6>
              </Row>
            </Col>
            <Col sm="1" xs="1">
              <Row style={{ marginTop: "30%" }}>
                <button className="button1" onClick={() => fun()}>
                  <b>LOGOUT</b>
                </button>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
  function fun() {
    window.location.reload();
  }
};
export default Header;
