import './App.css';
import React, {useState, useEffect} from 'react';
//import Captcha from './components/Captcha/Captcha';
import CounState from './components/CounState/CounState';
import Device from './components/Device/Device';
import Grade from './components/Grade/Grade';
import Lang from './components/Lang/Lang';
//import Mobile from './components/Mobile/Mobile';
import Subjects from './components/Subjects/Subjects';

function App() {

  // console.log(codes);
  // console.log(Country.getAllCountries());
  // console.log(State.getAllStates());
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your form has been submitted successfully. We will get back to you soon.`);
    window.location.reload(true);
  }

  return (
      <div className="container">
   
      <div className="container1">
        Book a Free Demo
      </div>
      <div className="container2">
        <span>
     
          School Courses
        </span>
      </div>

      {/* <Mobile /> */}
      <Device />
      <Grade />
      <Subjects />
      <Lang />
      <CounState/>
      {/* <Country />
      <State />
      <City /> */}
      {/* <Captcha /> */}

      <div className="submitContainer" onClick={handleSubmit}>
        <span>Book Demo</span>
      </div>
      
    </div>
  );
}

export default App;
