import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AddButton } from "../redux/actions/expensives_action";

const DashboardExpensive = (props) => {
  // console.log("dataExtee", props);
  const [greeting, sgreeting] = useState("welcome");
  const [income, setIncome] = useState(0);
  const [expensive, setExpensive] = useState(0);
  const [balance, setBalance] = useState(0);
  const [child, sChild] = useState(0);
  //const val = props.data[0]?.child;
  const [value, setValue] = useState("initial");
  // useEffect(() => {
  // This effect uses the `value` variable,
  // so it "depends on" `value`.
  //   console.log(value);
  // }, [value]);
  // useEffect(() => {
  //   sChild(props.data[0]?.child);
  //   console.log("test1", child);
  //   sChild("false");
  //   console.log("test2", child);
  //   const body = {
  //     child: child,
  //   };
  //   props.AddButton(body);
  //   console.log("update", props);
  // }, [props]);
  const array = [
    {
      type: "balance",
      title: "Your Balance",
      backgroundColor: "red",
      amount: balance,
    },
    {
      type: "income",
      title: "Your Income",
      backgroundColor: "yellow",
      amount: income,
    },
    {
      type: "expensive",
      title: "Your expenses",
      backgroundColor: "blue",
      amount: expensive,
    },
  ];

  // useEffect(() => {
  // console.log("wait..");
  // if (props.data[0]?.child === true) {
  //   const body = {
  //     child: true,
  //   };
  //   props.AddButton(body);
  // }
  // console.log("after", props.data[0]?.child);
  // }, []);

  //sChild(true)
  useEffect(() => {
    let income = 0;
    let expenses = 0;
    props?.data.map((da) => {
      if (da.type === "income") {
        income += da?.amount;
      } else if (da.type === "expensive") {
        expenses += da?.amount;
      }
    });
    setIncome(income);
    setExpensive(expenses);
    setBalance(income - expenses);
  }, [props]);

  return (
    <div className="container">
      <div className="mt-5 pb-3 mb-5 bg-dark">
        <h1 className="text-white pt-3">Finance</h1>
        <h4 className="text-white pt-1">Welcome back to your Money Manager</h4>
      </div>
      <div className="row">
        <React.Fragment>
          {array.map((item, i) => (
            <div className="col-md-4 mb-5 text-dark" key={i}>
              <div
                className="card123 pb-3 pt-3"
                style={{
                  width: "300px",
                  height: "150px",
                  backgroundColor: item.backgroundColor,
                  borderRadius: "20px",
                  border: "1px solid black",
                }}
              >
                <img
                  src="balance-image.png"
                  className="text-left"
                  width="50px"
                  height="50px"
                />

                <h3 className="text-white mt-2">Rs &nbsp;{item.amount}</h3>
              </div>
            </div>
          ))}
        </React.Fragment>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    data: state.data,
  }),
  {}
)(DashboardExpensive);
