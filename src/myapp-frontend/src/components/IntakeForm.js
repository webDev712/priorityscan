import React, { useState } from "react";
import './css/IntakeForm.css';
import IntakeFormInput from "./IntakeFormInput";
import MainPageResponceBlock from "../components/MainPageResponceBlock";
import Select from 'react-select';
import './css/IntakeFormInput.css';

function IntakeForm(props) {
    const setFormVisibility = props.setFormVisibility;
    const setResponseData = props.setResponseData;
      function submitIntakeFormFunction() {
        const response = fetch(
            'http://16.171.113.89:80/api/send-data', {
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
                <div id="IntakeFormDescription">I live in <IntakeFormInput name='livingPlace' /> and have a 
                <select id="appointmentType" className="IntakeFormInput IntakeFormSelect">
                    <option default></option>

                    <option value={'ct'}>CT</option>
                    <option value={'mri'}>MRI</option>
                </select> 
                appointment booked on <IntakeFormInput type='date' name='appointmentDate' />. I am willing to travel within <IntakeFormInput onlyNums='true' min='0' name='maxDistance' style={ {textDecoration: 'none'} } width='5vw' default='25' /> KM’s to get it done sooner.</div>
                <button id="IntakeFormButton" onClick={submitIntakeFormFunction}>Submit</button>
            </div>
        </div>
    )
}

export default IntakeForm;