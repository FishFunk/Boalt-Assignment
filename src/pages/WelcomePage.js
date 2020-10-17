import React from 'react';
import styles from './WelcomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'react-countup';
import {
    useHistory
  } from "react-router-dom";

export default function WelcomePage() {
    let history = useHistory();

    function goToHome(){
        history.push('/home');
    }

    return (
    <div className='container' onClick={goToHome}>
        <header className={`animated ${styles.welcomeHeader} ${styles.pullDown}`}>
            <FontAwesomeIcon icon={faApple} className={styles.headerAppleLogo} size='2x' />
        </header>   
        <div className={`backgroundGradient animated ${styles.content} ${styles.squeeze}`}>
            <div className='animated fadeInUp'>
                <div className={styles.row}>
                    <FontAwesomeIcon icon={faApple} className={styles.mainAppleLogo}/>
                </div>
                <div className={styles.row}>
                    <div className={styles.counter}>
                        <CountUp
                            start={48}
                            end={20}
                            duration={1.5} 
                            useEasing={true}
                        />
                        <CountUp
                            start={75}
                            end={19}
                            duration={1.5} 
                            useEasing={false}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.absoluteCenterTextContainer} animated fadeInUp`}>
            <text className={styles.centerText}>New Products Coming This Summer</text>
        </div>
    </div>);
}