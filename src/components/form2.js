import { React, useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Formaction from "../redux/actions/form2action";
import moment from "moment";

const Process = (props) => {
  const [username, Susername] = useState(props.data.registraton[0].name);
  const [mobile, Smobile] = useState(props.data.registraton[0].phone);
  const [amount, Samount] = useState("");
  const [purpose, Spurpose] = useState("");
  const [type, Stype] = useState("");
  const [data, Sdata] = useState("");

  const sub = async (e) => {
    e.preventDefault();

    // console.log(amount + purpose + type);
    if (amount != "" && purpose != "" && type != "") {
      // console.log("okkkkkkkkk");
      const br = `\n`;
      var body = {
        username: username,
        mobile: mobile,
        amount: amount,
        purpose: purpose,
        type: type,
        // date: moment().format("DD/MM/YYYY" \n "(hh:mm:ss)"),
        date: moment().format("DDMMMYYYY"),
        time: moment().format("hh:mm A"),
        sno: moment().format("x"),
      };

      await props.Formaction(body);
    } else console.log("noooooo");
  };

  return (
    <div>
      <Form>
        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextEmail"
        >
          <Row className="form2grouprow">
            <Form.Label>User Name</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control readOnly type="text" defaultValue={username} />
          </Row>
        </Form.Group>

        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextEmail"
        >
          <Row className="form2grouprow">
            <Form.Label>Mobile</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control readOnly type="number" defaultValue={mobile} />
          </Row>
        </Form.Group>

        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextPassword"
        >
          <Row className="form2grouprow">
            <Form.Label>Amount</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control
              required
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => Samount(e.target.value)}
            />
          </Row>
        </Form.Group>

        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextPassword"
        >
          <Row className="form2grouprow">
            <Form.Label>Purpose</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control
              required
              as="textarea"
              placeholder="Ex : This amount saving for children or This amount spending for wife"
              style={{ height: "100px" }}
              onChange={(e) => Spurpose(e.target.value)}
            />
          </Row>
        </Form.Group>

        <Form.Group className="form2group" controlId="formBasicSelect">
          <Row className="form2grouprow">
            <Form.Label>Select Type</Form.Label>
          </Row>
          <Form.Control as="select" onChange={(e) => Stype(e.target.value)}>
            <option>Select Type</option>
            <option>Savings</option>
            <option>Expensives</option>
          </Form.Control>
        </Form.Group>
        <Row style={{ display: "block", textAlign: "center" }}>
          {" "}
          <Button
            variant="primary"
            type="submit"
            style={{ background: "#231962" }}
            onClick={sub}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

function mapStateToProps(state) {
  return { data: state };
}
const mapDispatchToProps = { Formaction };
export default connect(mapStateToProps, mapDispatchToProps)(Process);
