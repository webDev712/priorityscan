import React, { useState } from 'react';
import '../components/css/IntakeFormInput.css';

function IntakeFormInput(props){
    const inputStyle = {
        width: props.width || "14vw"
    }
    const [inputValue, setValue] = useState('');
    var checkInputForNumbers = (event) => {
        setValue(event.target.value);
    }
    if (props.onlyNums){
        checkInputForNumbers = (event) => {
            const newValue = event.target.value;
            if ((event.keyCode !== 189 && /^[0123456789]+$/.test(newValue)) || newValue === '') {
                setValue(newValue);
            }
    }

    }
    return (
        <input 
        type={props.type || 'text'} 
        value={inputValue}
        name={props.name} 
        id={props.name}
        min={props.min}
        style={inputStyle}
        className='IntakeFormInput'
        onChange={checkInputForNumbers}
        >
        </input>
    )
}

export default IntakeFormInput;