import React from 'react';
import './WelcomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

export default function WelcomePage() {
    return (
    <div className='conatiner'>
        <header className='animated welcomeHeader pullDown'>
            <FontAwesomeIcon icon={faApple} className='headerAppleLogo' size='2x' />
        </header>   
        <div className='content backgroundGradient animated squeeze'>
            <div className='row'>
                <FontAwesomeIcon icon={faApple} className='mainAppleLogo' size='6x' />
            </div>
            <div className='row'>
                <button className='enterBtn'>Enter</button>
            </div>
        </div>
    </div>);
}