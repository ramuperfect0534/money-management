import React, { useEffect, useState } from "react";
import Axios from "axios";
import WetherResult from "./WetherResult";

const Weatherapi = () => {
  let api_key = "50138e53ad829f7098dffc16cfe43ce2";
  const [city, setCity] = useState("");
  const [results, setResults] = useState({});
  useEffect(() => {}, []);

  const submit = async (e) => {
    e.preventDefault();
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    )
      .then((res) => {
        console.log("res", res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <h1>Weather Api</h1>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
      <br />
      <br />
      <WetherResult results={results} />
    </div>
  );
};

export default Weatherapi;
