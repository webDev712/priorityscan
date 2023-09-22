import React from 'react';
import Button from '../components/Button';
import '../components/css/MainPageResponceBlock.css';


function MainPageResponceBlock(props){
    /*
    props:
        appointmentType,
        appointmentDate,
        appointmentPlace,
        appointmentDateSoonerCount,
    response JSON:
        message: 'Data was received',
        livingPlace: req.body.livingPlace,
        appointmentType: req.body.appointmentType,// TODO: change it
        appointmentDateSoonerCount: req.body.appointmentDate,
        appointmentDate: '09/09/2023',
        maxDistance: req.body.maxDistance
    */

    return (
        <div id='MainPageResponceBlock'>
            <div id='availability'>AVAILABILITY</div>
            <div id='description'>You could get your <span id='appointmentType'>{props.data.appointmentType||'props.appointmentType'}</span> on <span id='appointmentDate'>{props.data.appointmentDate||'props.appointmentDate'}</span> at <span id='appointmentPlace'>{props.data.appointmentPlace||'props.appointmentPlace'}</span>. <span id='appointmentDateSoonerCount'>{props.data.appointmentDateSoonerCount||'props.appointmentDateSoonerCount'}</span> days sooner than your previously scheduled surgery date.</div>
            <div id='clickBelowText'>Click below to make that happen.</div>
            <div style={{display: 'flex', margin: 'auto', width: '60%', minWidth: 'max-content', justifyContent: 'space-around', paddingBottom: '7vh'}}>
                <Button name='Login' width='10vw'></Button>
                <Button name='Register' width='10vw'></Button>
                <Button name='Google' width='10vw'></Button>
            </div>
            <div id='bookSnswerBackground'></div>
        </div>
    )
}

export default MainPageResponceBlock;