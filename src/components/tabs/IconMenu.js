import React  from 'react';
import styles from './IconMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';

export default function IconMenu(props) {

    function isTabActive(tabName){
        return props.activeTab === tabName;
    }

    return (
        <div className={styles.menu}>
            <ul className={`${styles.menuItems}`}>
                <li
                    className={`${isTabActive('phone') ? styles.active : ''}`} 
                    onClick={props.onSetActiveTab.bind(this, 'phone')}>
                    <FontAwesomeIcon icon={faMobileAlt} />
                </li>
                <li 
                    className={`${isTabActive('macbook') ? styles.active : ''}`}
                    onClick={props.onSetActiveTab.bind(this, 'macbook')}>
                    <FontAwesomeIcon icon={faLaptop} />
                </li>
                <li 
                    className={`${isTabActive('watch') ? styles.active : ''}`}
                    onClick={props.onSetActiveTab.bind(this, 'watch')}>
                    <FontAwesomeIcon icon={faClock} />
                </li>
            </ul>
        </div>
    )

}