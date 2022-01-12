import React, { useState } from "react";
import './CounState.css';
import { countriesData } from "../../api/data";

function CounState() {
  const [num, setNum] = useState("");
  const [stat, setStat] = useState({
    num: "",
  })
  const [{ country, state, code }, setData] = useState({
    country: "India",
    state: "Punjab",
    code:"+91"
  });

  const countries = countriesData.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const states = countriesData.find(item => item.name === country)?.states.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ));

  const codes = countriesData.map((code) => (
    <option key={code.cod} value={country.name}>
      {code.cod}
    </option>
  ));

  function handleCountryChange(event) {
    setData(data => ({ state: '', country: event.target.value }));
  }

  function handleStateChange(event) {
    setData(data => ({ ...data, state: event.target.value }));
  }

  function handleCodesChange(event) {
    setData(data => ({ ...data, code: event.target.value }));
  }

  const handleChange = e => {
    setStat({
      ...stat,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="counStateContainer1">
    <div className="counStateContainer2">
      <div className="counStateContainer3">
        Country
        </div>
        <div className="counStateContainer4">
        <select value={country} onChange={handleCountryChange}>
          {countries}
        </select>
      </div>
    </div>
    <div className="counStateContainer5">
      <div className="counStateContainer6">
        State
      </div>
      <div className="counStateContainer7">
        <select value={state} onChange={handleStateChange}>
          {states}
        </select>
      </div>
      </div>

      <div className="mobileContainer">
        <div className="mobileContainer1">
            Mobile Number 
        </div>
        <div className="mobileContainer2">
        <select value={code} onChange={handleCodesChange}>
          {codes}
        </select>
          
        </div>
        <div className="mobileContainer3">
        <input placeholder='Phone Number' type="text" name='num' value={stat.num} onChange={handleChange}/>
        </div>
      </div>

      </div>
  );
}

export default CounState;