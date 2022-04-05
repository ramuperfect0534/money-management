import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Delete from "../redux/actions/delete";
import Modal from "react-bootstrap/Modal";
const Mini = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let val = 0;
  useEffect(() => {
    // console.log("mimi", props.data.form);
  }, [props]);

  function fun(sno) {
    // console.log("delete", sno);
    props.Delete(sno);
    handleClose();
  }
  return (
    <div>
      <Row style={{ display: "block", textAlign: "center" }}>
        <h2>
          <span style={{ textTransform: "uppercase" }}>{props.name}</span> MINI
          STATEMENT
        </h2>
      </Row>
      <Row>
        <Col style={{ border: "1px solid #231962", textAlign: "center" }}>
          Date/Time
        </Col>
        <Col style={{ border: "1px solid #231962", textAlign: "center" }}>
          Savings Amount
        </Col>
        <Col style={{ border: "1px solid #231962", textAlign: "center" }}>
          Expensive Amount
        </Col>
        <Col style={{ border: "1px solid #231962", textAlign: "center" }}>
          Type
        </Col>
        <Col style={{ border: "1px solid #231962", textAlign: "center" }}>
          Reason
        </Col>
        <Col style={{ border: "1px solid #231962", textAlign: "center" }}>
          Delete
        </Col>
      </Row>

      {props.data.form.map((res) => (
        <Row>
          <Col style={{ border: "1px solid #231962", height: "60px" }}>
            <div className="cen_txt">
              {res.date}
              <br></br>
              {res.time}
            </div>
          </Col>

          <Col style={{ border: "1px solid #231962", height: "60px" }}>
            <div className="cen_txt">
              {res.type == "Savings" ? res.amount : "-"}
            </div>
          </Col>
          <Col style={{ border: "1px solid #231962", height: "60px" }}>
            <div className="cen_txt">
              {res.type == "Expensives" ? res.amount : "-"}
            </div>
          </Col>
          <Col style={{ border: "1px solid #231962", height: "60px" }}>
            <div className="cen_txt">{res.type}</div>
          </Col>
          <Col
            style={{
              border: "1px solid #231962",
              height: "60px",
              fontSize: "10px",
              overflowY: "scroll",
            }}
          >
            {res.purpose}
          </Col>
          <Col style={{ border: "1px solid #231962", height: "60px" }}>
            <>
              <Button
                className="cen_txt"
                variant="primary"
                onClick={handleShow}
              >
                Delete
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Hi{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {props.name}
                    </span>
                    ,
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>OOPS!!!... Are you sure to delete it?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Nope
                  </Button>
                  <Button variant="primary" onClick={() => fun(res.sno)}>
                    Delete it
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </Col>
        </Row>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return { data: state };
}
const mapDispatchToProps = { Delete };
export default connect(mapStateToProps, mapDispatchToProps)(Mini);

// function mapStateToProps(state) {
//   return { data: state };
// }
// const mapDispatchToProps = { Formaction };
// export default connect(mapStateToProps, mapDispatchToProps)(Process);
