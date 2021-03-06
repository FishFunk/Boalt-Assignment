import React from 'react';
import styles from './HomeTab.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { tabNames } from '../../Constants';

export default function HomeTab(props) {

    return (
        <div className={`grayGradient ${styles.content}`}>
            <FontAwesomeIcon icon={faApple} className={styles.backgroundLogo}/>
            <div className={`${styles.tabContent} animated fadeInUp`}>
                <div className={styles.row}>
                    <h1 className={styles.title}>Welcome to Apple</h1>
                </div>
                <div className={styles.row}> 
                    <a className={styles.productLink} onClick={()=>{}}>See Our Products</a>
                </div>
                <div className={styles.row}>
                    <ul className={styles.iconList}>
                        <li onClick={props.onSetActiveTab.bind(this, tabNames.phone)}>
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </li>
                        <li onClick={props.onSetActiveTab.bind(this, tabNames.macbook)}>
                            <FontAwesomeIcon icon={faLaptop} />
                        </li>
                        <li onClick={props.onSetActiveTab.bind(this, tabNames.watch)}>
                            <FontAwesomeIcon icon={faClock} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}