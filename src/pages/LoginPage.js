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

  function login(email, pwd){
    const user = AuthService.signIn(email, pwd);

    if(user){
      // history.replace(from);
      history.push('/home');
    } else {
      // TODO: replace alert with a UI rendered error
      alert("User log in failed");
    }
  };

  function registerUser(userData){
    const { status, message } = AuthService.createUser(userData);
    if(status === 'OK'){
      history.push('/home');
    } else {
      // TODO: Show message as a toast
      alert(message);
    }
  }

  function flipForm(){
    updateIsFlipped(!isFlipped);
  }

  return (
    <div className="modalWrapper">
      <div className="test animated animatedFadeInUp fadeInUp">
        <ReactCardFlip 
          isFlipped={isFlipped} 
          flipDirection="horizontal">
          <div>
            <div className="title">Sign-In</div>
            <LoginForm onSubmit={login} />
            <div className="signInFooter">
              <div className="subText">
                Not registered? 
                <button className="buttonLink" onClick={flipForm}>Sign-In</button>
              </div>   
            </div>
          </div>
          <div>
            <div className="title">Sign-Up</div>
            <RegisterForm onSubmit={registerUser}/>
            <div className="signUpFooter">
              <div className="subText">
                Already registered? 
                <button className="buttonLink" onClick={flipForm}>Sign-Up</button>
              </div>   
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>

  );
}