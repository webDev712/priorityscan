import React from "react";
import Menu from '../Menu';
import Header from "../Header";
import MainBackground from "../MainBackground";
import IntakeForm from "../IntakeForm";
import { useEffect, useState } from 'react';
import '../css/ProfilePage.css'

function ProfilePage(){
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);
  return (

    <div className="App">
      <Header></Header>
      {/* {message}       */}
      <Menu weight="profile"></Menu>
      <div id="dataContainer">
        <div className="headerText">This is your profile page</div>
        <div className="descriptionText">Please login to view your profile data</div>
      </div>
    </div>
  );
}

export default ProfilePage;