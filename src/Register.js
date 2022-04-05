import React, { useState } from "react";
import Title from "./components/title";
import Form from "./components/form";
import Title2 from "./components/title2";

const Register = () => {
  return (
    <div className="register-page">
      <div>
        <Title />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Title2 />
      </div>
    </div>
  );
};

export default Register;
