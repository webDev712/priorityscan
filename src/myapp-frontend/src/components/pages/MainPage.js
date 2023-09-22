import React from "react";
import Menu from '../Menu';
import Header from "../Header";
import MainBackground from "../MainBackground";
import IntakeForm from "../IntakeForm";
import { useEffect, useState } from 'react';
import MainPageResponceBlock from "../MainPageResponceBlock";


function MainPage(){
  document.title = "Priority Scan";
  const [isFormVisible, setFormVisibility] = useState(true);
  const [responseData, setResponseData] = useState('');     
  return (
    <div className="App">
      <Header></Header>
      {/* {message} */}
      <Menu ></Menu>
      {responseData && <MainPageResponceBlock data={responseData} />}
      {isFormVisible && (
      <div id="formAndAnswerContainer">
        <MainBackground></MainBackground>
        <IntakeForm setFormVisibility={setFormVisibility} setResponseData={setResponseData}></IntakeForm>
      </div>
      )}
    </div>
  );
}

export default MainPage;