import React, { useEffect, useState } from 'react';
import styles from './MacbookTab.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ApiService from '../../services/ApiService';
import IconMenu from './IconMenu';

export default function MacbookTab(props) {

    let [shipDate, setShipDate] = useState('');

    useEffect(()=>{
        ApiService.getShippingDates()
        .then((data)=>{
            setShipDate(data.mackbook);
        })
        .catch(error => console.error(error));
    }, []);

    function isTabActive(tabName){
        return props.activeTab === tabName;
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.row} ${styles.darkGradient}`}>
                <div className={`${styles.col} ${styles.grow}`}>
                    <div className={`${styles.grow} ${styles.padding40}`}>
                        <h2 className={styles.label}>Macbook Pro</h2>
                        <p className={styles.shipDate}>Starts shipping {shipDate}</p>
                        <h1 className={styles.title}>More power. More pro</h1>
                        <div className={`${styles.row}`}>
                            <div className={styles.col}>
                                <h2 className={styles.spec}>
                                8-core
                                </h2>
                                <label className={styles.specLabel}>Intel Processor</label>
                            </div>
                            <div className={styles.col}>
                                <h2 className={styles.spec}>
                                32GB
                                </h2>
                                <label className={styles.specLabel}>Memory</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.col} ${styles.grow}`}>
                    <img 
                        className={styles.macbookImg} 
                        src={require('../../assets/images/shutterstock_-1.png')}>
                    </img> 
                </div>
            </div>
            <div className={`${styles.row}`}>
                <div className={`${styles.col} ${styles.padding40}`}>
                    <a className={styles.buyNow}>
                        Buy now 
                        &nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>
                <div className={`${styles.col}`}>
                    <img 
                        className={styles.desktopImg} 
                        src={require('../../assets/images/shutterstock_734777938.png')}></img>
                </div>
                <div className={`${styles.col} ${styles.subscribePanel} ${styles.padding40}`}>
                    <h2>Subscribe Now</h2>
                    <div className={`${styles.form}`}>
                        <input 
                            className={styles.input}
                            type='email'
                            placeholder='Enter the email address'>
                            </input>
                        <button className={styles.subscribeBtn}>Subscribe</button>
                    </div>
                </div>
            </div>

            <IconMenu onSetActiveTab={props.onSetActiveTab} activeTab={props.activeTab} />
        </div>
    );
}