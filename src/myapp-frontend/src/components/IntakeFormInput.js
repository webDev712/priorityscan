import React, { useEffect, useState } from 'react';
import '../components/css/IntakeFormInput.css';

function IntakeFormInput(props){
    const inputStyle = {
        width: props.width || "14vw"
    }

    const [inputValue, setValue] = useState('');
    
    useEffect(() => {
        if (props.default){
            setValue(props.default);
        }
    }, [props.default])

    const checkInputForNumbers = (event) => {
        const newValue = event.target.value;
        if (props.onlyNums){
            if ((event.keyCode !== 189 && /^[0123456789]+$/.test(newValue)) || newValue === '') {
                setValue(newValue);
            }
        } else {
            setValue(event.target.value);
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
        placeholder={props.placeholder || ''}
        />
    )
}

export default IntakeFormInput;