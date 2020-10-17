import React from 'react';
import styles from './HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
    useHistory
  } from "react-router-dom";

export default function HomePage() {
    // let history = useHistory();

    return (
    <div className='container'>
        <header className={`animated ${styles.homeHeader} ${styles.shrinkLeft}`}>
            <FontAwesomeIcon icon={faApple} className={styles.headerLogo} size='2x' />
        </header>   
        <div className='content backgroundGradient'>

        </div>
    </div>);
}