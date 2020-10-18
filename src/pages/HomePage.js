import React, { useState } from 'react';
import styles from './HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';
import Media from 'react-media';
import HomeTab from '../components/tabs/HomeTab';
import PhoneTab from '../components/tabs/PhoneTab';

export default function HomePage() {

    // tab options - home, phone, macbook, watch
    let [activeTab, setActiveTab] = useState('home');

    function onSetActiveTab(tabName){
        setActiveTab(tabName);
    }

    function getActiveTab(){
        let component;

        switch(activeTab){
            case('phone'):
                component = <PhoneTab />;
                break;
            case('macbook'):
                break;        
            case('watch'):
                break;
            default:
                component = <HomeTab onSetActiveTab={onSetActiveTab} />
        }

        return component;
    }

    function isTabActive(tabName){
        return activeTab === tabName;
    }

    return (
    <div className='container'>
        <header className={styles.homeHeader}>
            <div 
                className={`animated ${styles.headerLogoWrapper} ${styles.shrinkLeft}`} 
                onClick={onSetActiveTab.bind(this, 'home')}>
                <FontAwesomeIcon icon={faApple} className={styles.headerLogo} size='2x' />
            </div>
            <div className={`animated ${styles.flyInRight}`}>
                {/* Shrink to icon based nav when screen size is small */}
                <Media queries={{ small: "(max-width: 699px)" }}>
                    {matches =>
                        matches.small ? (
                            <ul className={styles.nav}>
                                <li className={`${styles.navItem} ${isTabActive('phone') ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, 'phone')}>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </li>
                                <li className={`${styles.navItem} ${isTabActive('macbook') ? styles.active : ''}`}
                                    onClick={onSetActiveTab.bind(this, 'macbook')}>
                                    <FontAwesomeIcon icon={faLaptop} />
                                </li>
                                <li className={`${styles.navItem} ${isTabActive('watch') ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, 'watch')}>
                                    <FontAwesomeIcon icon={faClock} />
                                </li>
                                <li className={styles.navItem}>
                                    <button className={styles.notifyBtn}>Notify Me</button>
                                </li>
                            </ul>
                        ) : (
                            <ul className={styles.nav}>
                                <li className={`${styles.navItem} ${isTabActive('phone') ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, 'phone')}>
                                    <a>iPhone</a>
                                </li>
                                <li className={`${styles.navItem} ${isTabActive('macbook') ? styles.active : ''}`}
                                    onClick={onSetActiveTab.bind(this, 'macbook')}>
                                    <a>MacBook Pro</a>
                                </li>
                                <li className={`${styles.navItem} ${isTabActive('watch') ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, 'watch')}>
                                    <a>Watch</a>
                                </li>
                                <li className={styles.navItem}>
                                    <button className={styles.notifyBtn}>Notify Me</button>
                                </li>
                            </ul>
                        )
                    }
                </Media>
            </div>
        </header>   
        <div className={styles.tabContainer}>
            {getActiveTab()}
        </div>
        <div className={styles.leftPanel}></div>
    </div>);
}