import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Boxes = (props) => {
  const [istate, setIstate] = useState();
  const [jstate, setjstate] = useState();
  const [cstate, setCstate] = useState();
  const [tstate, setTstate] = useState(0);
  const [sstate, setSstate] = useState(0);

  const Array = [
    { title: "Total Savings Amount", Money: istate, color: "#287128" },
    { title: "Total Expensives Amount", Money: jstate, color: "#ab0000" },
    { title: "Current Balance Amount", Money: cstate, color: "#abab00" },
    {
      stitle: "Times of Saving",
      etitle: "Times of Expensive",
      smoney: tstate,
      dash: " : ",
      br: <br></br>,
      emoney: sstate,
      color: "rgb(6 126 144)",
    },
  ];
  useEffect(() => {
    //console.log("boxes", props.data.form);
    let i = 0;
    let j = 0;
    let t = 0;
    let s = 0;
    props.data.form.map((res) =>
      res.type == "Savings"
        ? ((i = parseInt(i) + parseInt(res.amount)), t++)
        : ((j = parseInt(j) + parseInt(res.amount)), s++)
    );

    setIstate(i);
    setjstate(j);
    setCstate(i - j);
    setTstate(t);
    setSstate(s);
  }, [props]);
  return (
    <div>
      <Row>
        {Array.map((res) => (
          <Col style={{ backgroundColor: res.color, padding: "5%" }}>
            <h3
              style={{
                fontSize: "24px",
                color: "#c5c5c5",
                textAlign: "center",
              }}
            >
              {res.title}
            </h3>
            <div
              style={{
                fontSize: "24px",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              {res.Money}
            </div>
            <div style={{ color: "#ffffff", fontSize: "16px" }}>
              {res.stitle} {res.dash} {res.smoney}
              {res.br}
              {res.br}
              {res.etitle} {res.dash} {res.emoney}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
function mapstate(state) {
  return { data: state };
}
const dispatch = {};
export default connect(mapstate, dispatch)(Boxes);
