import React from "react";
import { connect } from "react-redux";
// import { counter_reducer } from "../redux/reducers/counter_reducer";
const Counter = (props) => {
  console.log("props", props);

  const incButton = () => {
    props.increment(props.count);
  };

  const decButton = () => {
    // if (props.count) {
    //   return props.decrement(props.count);
    // } else {
    //   return props.count;
    // }
    props.decrement(props.count);

  };
  const ResetCounter=()=>{
    console.log("props",props.count)
   props.reset('')
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{props.count}</h2>
      <button onClick={incButton}>Increment</button>
      <button onClick={decButton} disabled={props.count < 1}>Decrement</button>
      <button onClick={ResetCounter}>Reset Counter</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "state");
  return {
    // prop: state.prop
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT_BUTTON" }),
    decrement: () => dispatch({ type: "DECREMENT_BUTTON" }),
    reset: () => dispatch({ type: "RESET_BUTTON" }),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
