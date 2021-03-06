import React, { useState } from 'react';
import {
    useHistory
  } from "react-router-dom";
import LoginForm from '../components/login/LoginForm';
import AuthService from '../services/AuthService';
import './LoginPage.scss';
import ReactCardFlip from 'react-card-flip';
import RegisterForm from '../components/login/RegisterForm';

export default function LoginPage() {
  let history = useHistory();
  let [isFlipped, updateIsFlipped] = useState(false);
  let [showSpinner, setShowSpinner] = useState(false);
  let [successMessage, setSuccessMessage] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  let [modalClasses, setModalClasses] = useState('modal animated fadeInUp');

  async function login(email, pwd){
    setShowSpinner(true);
    const response = await AuthService.signIn(email, pwd);
    if(response.status === 'OK'){
      // Login succeeded
      setModalClasses('modal animated fadeOut');
      // Delay page change for fade out animation
      setTimeout(()=>{
        history.push('/welcome');
        setShowSpinner(false);
      }, 1000);
    } else {
      setErrorMessage(response.message);
      setShowSpinner(false);
    }
  };

  async function registerUser(userData){
    setShowSpinner(true);
    const { status, message } = await AuthService.createUser(userData);
    if(status === 'OK'){
      setSuccessMessage(message);
      flipForm();
    } else {
      setErrorMessage(message);
    }
    setShowSpinner(false);
  }

  function flipForm(){
    updateIsFlipped(!isFlipped);
  }

  return (
    <div className="modalWrapper primaryGradient" onClick={()=>{setErrorMessage(''); setSuccessMessage('')}}>
      <div className={modalClasses}>
        <div className="message">
          {  
            errorMessage ? <text className="errorMessage">{errorMessage}</text> : null
          }
          {  
            successMessage ? <text className="successMessage">{successMessage}</text> : null
          }
        </div>
        <ReactCardFlip 
          isFlipped={isFlipped} 
          flipDirection="horizontal">
          <div>
            <div className="title">Sign-In</div>
            <LoginForm onSubmit={login} loading={showSpinner} />
            <div className="signInFooter">
              <div className="subText">
                Not registered? 
                <button className="buttonLink" onClick={flipForm} disabled={showSpinner}>
                    Sign-Up
                </button>
              </div>   
            </div>
          </div>
          <div>
            <div className="title">Sign-Up</div>
            <RegisterForm onSubmit={registerUser} loading={showSpinner}/>
            <div className="signUpFooter">
              <div className="subText">
                Already registered? 
                <button className="buttonLink" onClick={flipForm} disabled={showSpinner}>
                    Sign-In
                </button>
              </div>   
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>

  );
}