import React from "react";

const WetherResult = (props) => {
  console.log("props", props);
  console.log("name---->", props.results.name);
  return (
    <div>
      <h4>weather Results</h4>
      <h1>{props.results.name}</h1>
      {/*
      <h4>
        {props?.results === undefined
          ? null
          : props?.results?.main["temp"] / 100}
      </h4>
        */}
    </div>
  );
};

export default WetherResult;
