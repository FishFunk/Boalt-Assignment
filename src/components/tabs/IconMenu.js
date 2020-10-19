// **********
// Functional component rendering an icon based navigation menu 
// positioned above content on right side of screen
// 
// props: { activeTab: string, onSetActiveTab: (tabName: string)=> any }
// *********

import React  from 'react';
import styles from './IconMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';
import { tabNames } from '../../Constants';

export default function IconMenu(props) {

    function isTabActive(tabName){
        return props.activeTab === tabName;
    }

    return (
        <div className={styles.menu}>
            <ul className={`${styles.menuItems}`}>
                <li
                    className={`${isTabActive(tabNames.phone) ? styles.active : ''}`} 
                    onClick={props.onSetActiveTab.bind(this, tabNames.phone)}>
                    <FontAwesomeIcon icon={faMobileAlt} />
                </li>
                <li 
                    className={`${isTabActive(tabNames.macbook) ? styles.active : ''}`}
                    onClick={props.onSetActiveTab.bind(this, tabNames.macbook)}>
                    <FontAwesomeIcon icon={faLaptop} />
                </li>
                <li 
                    className={`${isTabActive(tabNames.watch) ? styles.active : ''}`}
                    onClick={props.onSetActiveTab.bind(this, tabNames.watch)}>
                    <FontAwesomeIcon icon={faClock} />
                </li>
            </ul>
        </div>
    )

}