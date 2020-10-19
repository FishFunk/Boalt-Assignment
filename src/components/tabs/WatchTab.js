import React, { useEffect, useState } from 'react';
import styles from './WatchTab.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import ApiService from '../../services/ApiService';
import IconMenu from './IconMenu';

export default function WatchTab(props) {

    let [shipDate, setShipDate] = useState('');
    let [leftImgActive, setLeftImgActive] = useState(false);

    useEffect(()=>{
        ApiService.getShippingDates()
        .then((data)=>{
            setShipDate(data.watch);
        })
        .catch(error => console.error(error));
    }, []);

    function setActiveImg(bool){
        setLeftImgActive(bool);
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.row} ${styles.grow} ${styles.flexWrap}`}>
                <div className={`${styles.col} ${styles.grow}`}>
                    <div className={`grayGradient ${styles.grow} ${styles.padding} animated fadeInLeft`}>
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
                <div className={`${styles.col} ${styles.watchImgContainer} animated fadeInRight`}>
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
            </div>
            <div className={`${styles.row} ${styles.spaceBetween} animated fadeInUp`}>
                <div className={`${styles.padding} ${styles.grow}`}>
                    <h1 className={styles.price}>From $699</h1>
                    <a className={styles.buyNow}>
                        Buy now 
                        &nbsp;
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </div>
                <div className={`${styles.padding} ${styles.grow}`}>
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
            <IconMenu onSetActiveTab={props.onSetActiveTab} activeTab={props.activeTab} />
        </div>
    );
}