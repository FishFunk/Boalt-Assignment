import React, { useEffect, useState } from 'react';
import styles from './WatchTab.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import ApiService from '../../services/ApiService';

export default function WatchTab(props) {

    let [shipDate, setShipDate] = useState('');
    let [leftImgActive, setLeftImgActive] = useState(false);

    useEffect(()=>{
        ApiService.getShippingDates()
        .then((data)=>{
            setShipDate(data.watch);
        })
        .catch(error => console.error(error));
    });

    function isTabActive(tabName){
        return props.activeTab === tabName;
    }

    function setActiveImg(bool){
        setLeftImgActive(bool);
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.row} ${styles.grow} ${styles.flexWrap}`}>
                <div className={`${styles.col} ${styles.grow}`}>
                    <div className={`grayGradient ${styles.grow} ${styles.padding40}`}>
                        <FontAwesomeIcon icon={faApple} className={styles.mainAppleLogo}/>
                        <div className={styles.row}>
                            <h2 className={styles.label}>Apple Watch</h2>
                        </div>
                        <div className={styles.row}>
                            <h1 className={styles.title}>Change starts within.</h1>
                        </div>
                        <div className={styles.row}>
                            <h3 className={styles.info}>
                                Apple Watch Series 4. Fundamentally redesigned and re-engineered
                                to help you be even more active, healthy, and connected.
                            </h3>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.shipDate}>Starts shipping {shipDate}</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.col} ${styles.watchImgContainer}`}>
                    <div className={`${styles.row} ${styles.watchImgContainer}`}>
                        {
                            leftImgActive ?
                                <img 
                                    className={styles.watchImg} 
                                    src={require('../../assets/images/White Watch-2@2x.png')}>
                                </img> :
                                <img 
                                    className={styles.watchImg} 
                                    src={require('../../assets/images/Black Watch-1@2x.png')}>
                                </img>
                        }
                    </div>
                </div>
                <div className={`${styles.col}`}>
                    <ul className={`${styles.iconList}`}>
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
            </div>
            <div className={`${styles.row} ${styles.spaceBetween}`}>
                <div className={`${styles.padding40} ${styles.grow}`}>
                    <h1 className={styles.price}>From $699</h1>
                    <a className={styles.buyNow}>
                        Buy now 
                        &nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>
                <div className={`${styles.padding40} ${styles.grow}`}>
                    <div className={`${styles.row} ${styles.spaceEvenly}`}>
                        <div className={styles.col} onClick={setActiveImg.bind(this, true)}>
                            <div className={`${styles.radio} ${leftImgActive ? styles.active : ''}`}>
                                <div className={`${styles.innerRadio} ${styles.whiteCircle}`}></div>
                            </div>
                            <label>White</label>
                        </div>
                        <div className={styles.col} onClick={setActiveImg.bind(this, false)}>
                            <div className={`${styles.radio} ${leftImgActive ? '' : styles.active}`}>
                                <div className={`${styles.innerRadio} ${styles.blackCircle}`}></div>
                            </div>
                            <label>Black</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}