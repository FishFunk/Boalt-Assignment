import React, { useState } from 'react';
import {
    useHistory,
    useLocation
  } from "react-router-dom";
import LoginForm from '../components/login/LoginForm';
import AuthService from '../services/AuthService';
import './LoginPage.scss';

export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let email = useState('');
  let pwd = useState('');

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    const user = AuthService.signIn((email, pwd));

    if(user){
      history.replace(from);
    } else {
      // TODO: replace alert with a UI rendered error
      alert("User log in failed");
    }
  };

  function onPressSignUp(){
    // TODO: animate to register form
  }

  return (
    <div className="ModalWrapper">
      <div className="Modal">
        <div className="Title">Sign-In</div>
        <LoginForm onSubmit={login} />
      </div>
      <div className="SignUpWrapper">
        <div className="SignUp">Not registered? <a href="" onClick={onPressSignUp}>Sign-up</a></div>   
      </div>
    </div>

  );
}