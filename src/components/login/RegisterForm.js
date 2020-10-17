import React, { useState } from 'react';
import './Form.scss';
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
        <div className="form">
            <div className="formInput">
                <label>Full Name</label>
                <input 
                    type='text'
                    className={nameError ? 'error': ''} 
                    placeholder='John Doe' 
                    onChange={(e)=>setName(e.target.value)}
                    onFocus={()=>setNameError(false)}>
                </input>
                { nameError ? <label className='errorLabel'>Required</label> : <label className='emptyLabel'></label>}
            </div>
            <div className="formInput">
                <label>Email</label>
                <input 
                    type='email'
                    className={emailError ? 'error': ''} 
                    placeholder='user@email.com' 
                    onChange={(e)=>setEmail(e.target.value)}
                    onFocus={()=>setEmailError('')}>
                </input>
                { emailError ? <label className='errorLabel'>{emailError}</label> : <label className='emptyLabel'></label>}
            </div>
            <div className="formInput">
                <label>Password</label>
                <input 
                    type='password'
                    className={pwdError ? 'error': ''} 
                    placeholder='****************' 
                    onChange={(e)=>setPwd(e.target.value)}
                    onFocus={()=>setPwdError(false)}>
                </input>
                { pwdError ? <label className='errorLabel'>Required</label> : <label className='emptyLabel'></label>}
            </div>

            <button className="submitBtn" onClick={onFormSubmit} disabled={props.loading}>
            {
                props.loading ? 
                    <Loader type="ThreeDots" color="#5AC8FA" height={10} width={20} /> :
                   <text>Sign-Up</text>
            }
            </button>
        </div>
    );
}
