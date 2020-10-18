import React from 'react';
import styles from './HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';
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
            <div className={`animated ${styles.flyInRight}`}>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <a>iPhone</a>
                    </li>
                    <li className={styles.navItem}>
                        <a>MacBook Pro</a>
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
            <FontAwesomeIcon icon={faApple} className={styles.backgroundLogo}/>
            <div className={`${styles.subContent} animated fadeInUp`}>
                <div className={styles.row}>
                    <h1 className={styles.title}>Welcome to Apple</h1>
                </div>
                <div className={styles.row}> 
                    <a>See Our Products</a>
                </div>
                <div className={styles.row}>
                    <ul className={styles.iconList}>
                        <li>
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLaptop} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.leftPanel}></div>
    </div>);
}