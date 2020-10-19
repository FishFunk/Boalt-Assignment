import React, { useState } from 'react';
import styles from './HomePage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';
import Media from 'react-media';
import HomeTab from '../components/tabs/HomeTab';
import PhoneTab from '../components/tabs/PhoneTab';
import WatchTab from '../components/tabs/WatchTab';
import MacbookTab from '../components/tabs/MacbookTab';
import { tabNames } from '../Constants';

export default function HomePage() {

    // tab options - home, phone, macbook, watch - default is home
    let [activeTab, setActiveTab] = useState(tabNames.home);

    function onSetActiveTab(tabName){
        setActiveTab(tabName);
    }

    function getActiveTab(){
        let component;

        switch(activeTab){
            case(tabNames.phone):
                component = <PhoneTab activeTab={activeTab} onSetActiveTab={onSetActiveTab} />;
                break;
            case(tabNames.macbook):
                component = <MacbookTab activeTab={activeTab} onSetActiveTab={onSetActiveTab} />;
                break;        
            case(tabNames.watch):
                component = <WatchTab activeTab={activeTab} onSetActiveTab={onSetActiveTab} />;
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
                onClick={onSetActiveTab.bind(this, tabNames.home)}>
                <FontAwesomeIcon icon={faApple} className={styles.headerLogo} size='2x' />
            </div>
            <div className={`animated ${styles.flyInRight}`}>
                {/* Shrink to icon based nav when screen size is small */}
                <Media queries={{ small: "(max-width: 699px)" }}>
                    {matches =>
                        matches.small ? (
                            <ul className={styles.nav}>
                                <li className={`${styles.navItem} ${isTabActive(tabNames.phone) ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, tabNames.phone)}>
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </li>
                                <li className={`${styles.navItem} ${isTabActive(tabNames.macbook) ? styles.active : ''}`}
                                    onClick={onSetActiveTab.bind(this, tabNames.macbook)}>
                                    <FontAwesomeIcon icon={faLaptop} />
                                </li>
                                <li className={`${styles.navItem} ${isTabActive(tabNames.watch) ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, tabNames.watch)}>
                                    <FontAwesomeIcon icon={faClock} />
                                </li>
                                <li className={styles.navItem}>
                                    <button className={styles.notifyBtn}>Notify Me</button>
                                </li>
                            </ul>
                        ) : (
                            <ul className={styles.nav}>
                                <li className={`${styles.navItem} ${isTabActive(tabNames.phone) ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, tabNames.phone)}>
                                    <a>iPhone</a>
                                </li>
                                <li className={`${styles.navItem} ${isTabActive(tabNames.macbook) ? styles.active : ''}`}
                                    onClick={onSetActiveTab.bind(this, tabNames.macbook)}>
                                    <a>MacBook Pro</a>
                                </li>
                                <li className={`${styles.navItem} ${isTabActive(tabNames.watch) ? styles.active : ''}`} 
                                    onClick={onSetActiveTab.bind(this, tabNames.watch)}>
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