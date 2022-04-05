import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../redux/actions/User_actions";
const User = (props) => {
  console.log("props123", props.user_reducer.user);
  //   console.log("aaaaaa", props.getUserInfo);

  useEffect(() => {
    props.getUserInfo();
  }, []);
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        {props?.user_reducer?.user?.map((users) => {
          return <li>{users.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state, "state");
  return {
    user_reducer: state.user_reducer,
  };
};

const mapDispatchToProps = {
  getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
