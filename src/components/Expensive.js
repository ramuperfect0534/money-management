import React, { useState } from "react";
import DashboardExpensive from "./DashboardExpensive";
import { connect } from "react-redux";
import { AddButton } from "../redux/actions/expensives_action";
import { DeleteList } from "../redux/actions/expensives_delete";
import { useEffect } from "react";
import Weatherapi from "./Weatherapi";

const Expensive = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState("");
  const [datas, setDatas] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [disable, setDisable] = useState(false);
  const [index, setIndex] = useState(0);
  //const [child, sChild] = useState(false);

  useEffect(() => {
    //props.details.map((data) => console.log("aftr Props", data));
    //console.log("fsdf", props.details);
    console.log("testing", props.details);
  }, [props]);

  const submit = async () => {
    setIndex(index + 1);
    if (title !== "" && amount !== undefined && type !== "") {
      //sChild(true);
      var body = {
        title: title,
        amount: Number(amount),
        type: type,
        index: index,
        child: true,
        index: index,
      };

      await props.AddButton(body);
      setIndex(index + 1);
    }

    setTitle("");
    setAmount("");
    setType("");
  };

  const remove = (data) => {
    props.DeleteList(data.index);
  };

  function handleTitle(e) {
    if (e === "") {
      setTitleError("Title Field should not be empty");
      // setDisable(true);
    } else {
      setTitleError("");
      // setDisable(false);
    }
  }

  function handleAmount(e) {
    if (e === "") {
      setAmountError("Amount Field should not be empty");
      // setDisable(true);
    } else {
      setAmountError("");
      // setDisable(false);
    }
  }
  function handleType(e) {
    if (e === "") {
      setTypeError("Title Field should not be empty");
      // setDisable(true);
    } else {
      setTypeError("");
      // setDisable(false);
    }
  }
  // console.log("Propscomen i", props);
  // console.log("hhhhh", props);
  return (
    <div>
      <div>
        {/* <DashboardExpensive dataa={datas} /> */}
        <DashboardExpensive />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mt-2 mb-2">Add Transaction</h4>
            <div>
              <input
                type="text"
                placeholder="Title"
                className="mt-2 w-50 form-control"
                style={{ margin: "auto" }}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={(e) => handleTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Amount"
                className="mt-2 w-50 form-control"
                style={{ margin: "auto" }}
                onChange={(e) => setAmount(e.target.value)}
                onBlur={(e) => handleAmount(e.target.value)}
                value={amount}
              />
            </div>
            <div>
              <select
                name="type"
                value={type}
                style={{ margin: "auto" }}
                className="mt-2 w-50 form-control"
                onChange={(e) => setType(e.target.value)}
                onBlur={(e) => handleType(e.target.value)}
              >
                <option value="">Please Select</option>
                <option value="income">Income</option>
                <option value="expensive">Expensives</option>
              </select>
              <span style={{ color: "red" }}>{typeError}</span>
            </div>

            <div>
              <button
                onClick={submit}
                style={{ margin: "auto" }}
                className="mt-2 w-50 form-control btn-danger"
                // disabled={disable}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="text-left">History</h4>
            <table className="table table-dark mt-4">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {props?.details?.map((data, i) => {
                  // console.log("data", data);
                  return (
                    <tr key={i}>
                      <td>{data.title}</td>
                      <td>Rs {data.amount}</td>
                      <td>{data.type}</td>
                      <td>
                        {" "}
                        <button onClick={() => remove(data)}>
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
export default connect(
  (state) => ({
    details: state.data,
  }),
  { AddButton, DeleteList }
)(Expensive);
