import React from "react";
import Menu from '../Menu';
import Header from "../Header";
import MainBackground from "../MainBackground";
import IntakeForm from "../IntakeForm";
import { useEffect, useState } from 'react';
import Button from "../Button";
import '../css/BookPageStyles.css';

function BookPage(){
  document.title = "Priority Scan";
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  return (

    <div className="App">
      <Header></Header>
      <Menu weight='book'></Menu>
      <div id="BookPageBackgroundContainer">
        <div id="bookingNotice">BOOKING NOTICE</div>
        <div id="BookPageForms">
          <div id="userCurrentApptContainer">

            <div id="userCurrentApptHeader">USER CURRENT APPT</div>

            <div id="userCurrentApptDescription">
              <div>
                <div>TYPE:</div>
                <div>DATE:</div>
                <div>HOSPITAL:</div>
                <div>REFFERING PRACTIONER:</div>
              </div>
            </div>
          </div>
          <div id="newlyFoundApptContainer">
            <div id="newlyFoundApptHeader">NEWLY FOUND APPT</div>
            <div id="newlyFoundApptDescription">
              <div>
                <div><b>Date 1:</b></div>
                <br />
                <div>Hospital:</div>
                <div>Wait Days:</div>
                <div>Distance(KM):</div>
              </div>
              <div>
                <div><b>Date 2:</b></div>
                <br />
                <div>Hospital:</div>
                <div>Wait Days:</div>
                <div>Distance(KM):</div>
              </div>
              <div>
                <div><b>Date 3:</b></div>
                <br />
                <div>Hospital:</div>
                <div>Wait Days:</div>
                <div>Distance(KM):</div>
              </div>
            </div>
          </div>
        </div>
        <div id='BookPageSubmitButton'>
          <Button name="Submit Request"></Button>
        </div>
      </div>
      <div id='BookPageDisclaimer'>
        Disclaimer: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
      </div>
    </div>
  );
}

export default BookPage;