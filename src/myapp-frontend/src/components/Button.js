import React from 'react';
import './css/ButtonStyles.css';

    function Button(props){
    return (
        <button className="buttonBackgroundModule" style={{width: props.width}}>{props.name}</button>
    )
}

export default Button;