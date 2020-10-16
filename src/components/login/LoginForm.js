import React, { useState } from 'react';
import './LoginForm.scss';

export default function LoginForm(props) {

  let [email, setEmail] = useState('');
  let [pwd, setPwd] = useState('');

  function onFormSubmit(){
      //TODO: Form validation steps
      props.onSubmit(email, pwd);
  }


  return (
      <div className="Form">
          <div className="FormInput">
          <label>Email</label>
          <input type='email' placeholder='user@email.com' onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div className="FormInput">
          <label>Password</label>
          <input type='password' placeholder='****************' onChange={(e)=>setPwd(e.target.value)}></input>
          </div>

          <button className="SubmitBtn" onClick={onFormSubmit}>Sign-Up</button>
      </div>
  );
}
