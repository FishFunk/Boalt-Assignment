import React, { useEffect, useState } from 'react';
import styles from './PhoneTab.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import ApiService from '../../services/ApiService';
import IconMenu from './IconMenu';

export default function PhoneTab(props) {

    let [shipDate, setShipDate] = useState('');
    let [leftImgActive, setLeftImgActive] = useState(true);

    useEffect(()=>{
        ApiService.getShippingDates()
        .then((data)=>{
            setShipDate(data.iphone);
        })
        .catch(error => console.error(error));
    }, []);

    function setActiveImg(bool){
        setLeftImgActive(bool);
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.col} ${styles.grow} animated fadeInUp`}>
                <div className={`grayGradient ${styles.grow} ${styles.padding} animated fadeInUp`}>
                    <FontAwesomeIcon icon={faApple} className={styles.mainAppleLogo}/>
                    <div className={styles.row}>
                        <h2 className={styles.label}>iPhone</h2>
                    </div>
                    <div className={styles.row}>
                        <h1 className={styles.title}>The ultimate iPhone</h1>
                    </div>
                    <div className={styles.row}>
                        <h3 className={styles.info}>The Future is here. Join the iPhone Upgrade 
                        Program to get the latest iPhone - NOW!</h3>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.shipDate}>Starts shipping {shipDate}</span>
                    </div>
                </div>
                <div className={`${styles.row} ${styles.spaceBetween}`}>
                    <div className={styles.padding}>
                        <h1 className={styles.price}>From $699</h1>
                        <a className={styles.buyNow}>
                            Buy now 
                            &nbsp;
                            <FontAwesomeIcon icon={faChevronRight} />
                        </a>
                    </div>
                    <div className={styles.padding}>
                        <div className={styles.row}>
                            <img 
                                onClick={setActiveImg.bind(this, true)}
                                className={styles.frontBackImg}
                                src={require('../../assets/images/apple-iphonexs-max-gold.png')}>
                            </img>
                            <img 
                                onClick={setActiveImg.bind(this, false)}
                                className={styles.frontBackImg}
                                src={require('../../assets/images/apple-iphonexs-max-gold-back-3.png')}>
                            </img>
                        </div>
                        <div className={styles.row}>
                            <div className={`${styles.leftActiveImgIndicator} ${leftImgActive ? styles.active : ''}`}></div>
                            <div className={`${styles.rightActiveImgIndicator} ${leftImgActive ? '' : styles.active}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.col} animated fadeInUp`}>
                <div className={`${styles.row} ${styles.phoneImgContainer}`}>
                    {
                        leftImgActive ?
                            <img 
                                className={styles.phoneImg} 
                                src={require('../../assets/images/Iphone 1@2x.png')}>
                            </img> :
                            <img 
                                className={styles.phoneImg} 
                                src={require('../../assets/images/apple-iphonexs-max-gold-back-2.png')}>
                            </img> 
                    }
                </div>
            </div>
            <IconMenu onSetActiveTab={props.onSetActiveTab} activeTab={props.activeTab} />
        </div>
    );
}