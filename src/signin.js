import React, { useState, useEffect } from "react";
import Form from "./components/form1";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = (props) => {
  const [warn, setwarn] = useState(props.data.registraton.length);
  let navigate = useNavigate();

  window.addEventListener("popstate", (event) => {
    window.location.reload();
  });

  useEffect(() => {
    if (warn == 0) {
      navigate("/");
    }
  }, [props]);

  if (warn != 0) {
    return (
      <div className="register-page">
        <div>
          <h1 className="title">
            Hello {props.data.registraton[0].name},<br></br>{" "}
            <span>Login Here with your phone number</span>
          </h1>
          <div class="title_underline"></div>
        </div>
        <div>
          <Form />
        </div>
        <div>
          <br></br>
          <div class="title_underline"></div>
          <h1 className="title" style={{ marginTop: "-2%" }}>
            <span className="title2-s">
              Hint : Use same number which you have used in your Register
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    return <div>{navigate("/")}</div>;
  }
};
function mapstate(state) {
  return {
    data: state,
  };
}
function dispatch() {}
export default connect(mapstate, dispatch)(Signin);
