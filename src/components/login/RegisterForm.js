// **********
// Functional component rendering a registration form
// with name, email, and password validation checks
// 
// props: { loading: boolean, onSubmit: ({email: string, pwd: string})=> any }
// *********


import React, { useState } from 'react';
import styles from './Form.module.scss';
import Loader from 'react-loader-spinner';
import { validateEmail } from '../../Utils';

export default function RegisterForm(props) {

    let [name, setName] = useState('');
    let [nameError, setNameError] = useState(false);
    let [email, setEmail] = useState('');
    let [emailError, setEmailError] = useState('');
    let [pwd, setPwd] = useState('');
    let [pwdError, setPwdError] = useState(false);

    function onFormSubmit(){
        let valid = true;
        if(name.length === 0){
            setNameError(true);
            valid = false;
        }

        const validationResponse = validateEmail(email);
        setEmailError(validationResponse);
        if(validationResponse){
            valid = false;
        }
  
        if(pwd.length === 0){
          setPwdError(true);
          valid = false;
        }

        if(valid){
            const user = {
                name: name,
                email: email,
                pwd: pwd
            }

            props.onSubmit(user);
        }
    }

    return (
        <div className={styles.form}>
            <div className={styles.formInput}>
                <label>Full Name</label>
                <input 
                    type='text'
                    className={nameError ? styles.error: ''}
                    placeholder='John Doe' 
                    onChange={(e)=>setName(e.target.value)}
                    onFocus={()=>setNameError(false)}>
                </input>
                { nameError ? 
                    <label className={styles.errorLabel}>Required</label> : 
                    <label className={styles.emptyLabel}></label>}
            </div>
            <div className={styles.formInput}>
                <label>Email</label>
                <input 
                    type='email'
                    className={emailError ? styles.error: ''} 
                    placeholder='user@email.com' 
                    onChange={(e)=>setEmail(e.target.value)}
                    onFocus={()=>setEmailError('')}>
                </input>
                { emailError ? 
                    <label className={styles.errorLabel}>{emailError}</label> : 
                    <label className={styles.emptyLabel}></label>}
            </div>
            <div className={styles.formInput}>
                <label>Password</label>
                <input 
                    type='password'
                    className={pwdError ? styles.error: ''} 
                    placeholder='****************' 
                    onChange={(e)=>setPwd(e.target.value)}
                    onFocus={()=>setPwdError(false)}>
                </input>
                { pwdError ? <label className={styles.errorLabel}>Required</label> : <label className={styles.emptyLabel}></label>}
            </div>

            <button className={styles.submitBtn} onClick={onFormSubmit} disabled={props.loading}>
            {
                props.loading ? 
                    <Loader type="ThreeDots" color="#5AC8FA" height={10} width={20} /> :
                   <text>Sign-Up</text>
            }
            </button>
        </div>
    );
}
