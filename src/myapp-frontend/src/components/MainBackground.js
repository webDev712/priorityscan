import React from "react";
import background from './img/background.jpg';
import './css/MainBackgroundStyles.css';
import { useNavigate } from 'react-router-dom';



function MainBackground() {
    
    const history = useNavigate();
    const goToFAQ = () => {
        history('/faq');
    }

    return (
        <div id="MainBackgroundContainer">
            <div id="textContainer">
                <div id="priorityBackground">PRIORITY</div>
                <div id="scanBackground">SCAN</div>
                <div id="descriptionBackground">Helping Ontario residents faster care.</div>
                <button id="buttonBackground" onClick={goToFAQ}>Learn More</button>
            </div>
        </div>
    )
}

export default MainBackground;