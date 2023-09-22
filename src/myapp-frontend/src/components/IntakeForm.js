import React, { useState } from "react";
import './css/IntakeForm.css';
import IntakeFormInput from "./IntakeFormInput";
import MainPageResponceBlock from "../components/MainPageResponceBlock";

function IntakeForm(props) {
    const setFormVisibility = props.setFormVisibility;
    const setResponseData = props.setResponseData;
      function submitIntakeFormFunction() {
        const response = fetch(
            'http://localhost:80/api/send-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: "test POST request",
                livingPlace: document.getElementById('livingPlace').value,
                appointmentType: document.getElementById('appointmentType').value,
                appointmentDate: document.getElementById('appointmentDate').value,
                maxDistance: document.getElementById('maxDistance').value
            })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(`data:`, data);
            setResponseData(data);
            setFormVisibility(false);
        });
    }
    

    return (
        <div id="IntakeFormMainContainer">
            <div id="IntakeFormSmallContainer">
                <div id="IntakeFormHeader">Intake Form</div>
                <div id="IntakeFormDescription">I live in <IntakeFormInput name='livingPlace' /> and have a <IntakeFormInput name='appointmentType' /> appointment booked on <IntakeFormInput type='date' name='appointmentDate' />. I am willing to travel within <IntakeFormInput onlyNums='true' min='0' name='maxDistance' style={ {textDecoration: 'none'} } /> KM’s to get it done sooner.</div>
                <button id="IntakeFormButton" onClick={submitIntakeFormFunction}>Submit</button>
            </div>
        </div>
    )
}

export default IntakeForm;