import React from 'react';
import styles from './HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
    useHistory
  } from "react-router-dom";

export default function HomePage() {
    // let history = useHistory();

    // TODO: Make nav responsive - check out react-media package

    return (
    <div className='container'>
        <header className={styles.homeHeader}>
            <div className={`animated ${styles.headerLogoWrapper} ${styles.shrinkLeft}`}>
                <FontAwesomeIcon icon={faApple} className={styles.headerLogo} size='2x' />
            </div>
            <div className={`animated ${styles.navWrapper} ${styles.popInLeft}`}>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <a>iPhone</a>
                    </li>
                    <li className={styles.navItem}>
                        <a>Macbook Pro</a>
                    </li>
                    <li className={styles.navItem}>
                        <a>Watch</a>
                    </li>
                    <li className={styles.navItem}>
                        <button className={styles.notifyBtn}>Notify Me</button>
                    </li>
                </ul>
            </div>
        </header>   
        <div className={`${styles.content}`}>

        </div>
    </div>);
}