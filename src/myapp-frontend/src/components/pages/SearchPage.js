import React from "react";
import Menu from '../Menu';
import Header from "../Header";
import MainBackground from "../MainBackground";
import IntakeForm from "../IntakeForm";
import { useEffect, useState } from 'react';

function SearchPage(){
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
      <Menu weight="search"></Menu>
      <div id="dataContainer">
        <div className="headerText">This is your search page</div>
        <div className="descriptionText">Please login to search information</div>
      </div>

    </div>
  );
}

export default SearchPage;