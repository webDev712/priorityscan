import React from 'react';
import './css/MenuStyles.css';
import lins from './img/lins.png';

function Menu(props) {
    if (props.weight == 'book'){
        return (
            <div id='containerMenu'>
                <ul className='customList'>
                    <li style={{ marginLeft: '5vh' }}><a href='/' className='linkMenu'><span id='priority'>PRIORITY</span> <span id='scan'>SCAN</span></a></li>
                    <li id='bookBlock' className='weight'><a href='/book' className='linkMenu'>BOOK</a></li>
                    <li><a href='/faq' className='linkMenu'>FAQ</a></li>
                    <li><a href='/profile' className='linkMenu'>PROFILE</a></li>
                    <li style={{ marginRight: '5vh' }}><div id='searchAndLins'><a href='/search' className='linkMenu'>SEARCH<img src={lins} alt='' id='linsPhoto' /></a></div></li>
                </ul>
            </div>
    )}
    else if (props.weight == 'faq'){
        return (
            <div id='containerMenu'>
                <ul className='customList'>
                    <li style={{ marginLeft: '5vh' }}><a href='/' className='linkMenu'><span id='priority'>PRIORITY</span> <span id='scan'>SCAN</span></a></li>
                    <li id='bookBlock' ><a href='/book' className='linkMenu'>BOOK</a></li>
                    <li className='weight'><a href='/faq' className='linkMenu'>FAQ</a></li>
                    <li><a href='/profile' className='linkMenu'>PROFILE</a></li>
                    <li style={{ marginRight: '5vh' }}><div id='searchAndLins'><a href='/search' className='linkMenu'>SEARCH<img src={lins} alt='' id='linsPhoto' /></a></div></li>
                </ul>
            </div>
    )}
    else if (props.weight == 'profile'){
        return (
            <div id='containerMenu'>
                <ul className='customList'>
                    <li style={{ marginLeft: '5vh' }}><a href='/' className='linkMenu'><span id='priority'>PRIORITY</span> <span id='scan'>SCAN</span></a></li>
                    <li id='bookBlock' ><a href='/book' className='linkMenu'>BOOK</a></li>
                    <li><a href='/faq' className='linkMenu '>FAQ</a></li>
                    <li className='weight'><a href='/profile' className='linkMenu'>PROFILE</a></li>
                    <li style={{ marginRight: '5vh' }}><div id='searchAndLins'><a href='/search' className='linkMenu'>SEARCH<img src={lins} alt='' id='linsPhoto' /></a></div></li>
                </ul>
            </div>
    )}
    else if (props.weight == 'search'){
        return (
            <div id='containerMenu'>
                <ul className='customList'>
                    <li style={{ marginLeft: '5vh' }}><a href='/' className='linkMenu'><span id='priority'>PRIORITY</span> <span id='scan'>SCAN</span></a></li>
                    <li id='bookBlock' ><a href='/book' className='linkMenu'>BOOK</a></li>
                    <li><a href='/faq' className='linkMenu '>FAQ</a></li>
                    <li><a href='/profile' className='linkMenu'>PROFILE</a></li>
                    <li style={{ marginRight: '5vh' }} className='weight'><div id='searchAndLins'><a href='/search' className='linkMenu'>SEARCH<img src={lins} alt='' id='linsPhoto' /></a></div></li>
                </ul>
            </div>
    )}
    else {
        return (
            <div id='containerMenu'>
                <ul className='customList'>
                    <li style={{ marginLeft: '5vh' }}><a href='/' className='linkMenu'><span id='priority'>PRIORITY</span> <span id='scan'>SCAN</span></a></li>
                    <li id='bookBlock' ><a href='/book' className='linkMenu'>BOOK</a></li>
                    <li><a href='/faq' className='linkMenu '>FAQ</a></li>
                    <li><a href='/profile' className='linkMenu'>PROFILE</a></li>
                    <li style={{ marginRight: '5vh' }}><div id='searchAndLins'><a href='/search' className='linkMenu'>SEARCH<img src={lins} alt='' id='linsPhoto' /></a></div></li>
                </ul>
            </div>
        )   
    }
}

export default Menu;