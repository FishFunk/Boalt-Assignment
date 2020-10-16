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

  async function login(email, pwd){
    setShowSpinner(true);
    const response = await AuthService.signIn(email, pwd);

    if(response.status === 'OK'){
      history.push('/home');
    } else {
      setErrorMessage(response.message);
    }

    setShowSpinner(false);
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
    <div className="modalWrapper backgroundGradient" onClick={()=>{setErrorMessage(''); setSuccessMessage('')}}>
      <div className="modal animated animatedFadeInUp fadeInUp">
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
                <button className="buttonLink" onClick={flipForm}>
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
                <button className="buttonLink" onClick={flipForm}>
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