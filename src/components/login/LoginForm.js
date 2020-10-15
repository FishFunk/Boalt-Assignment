import React from 'react';
import './LoginForm.scss';

export default function LoginForm(props) {
  return (
    <div className="Form">
        <div className="FormInput">
          <label>Email</label>
          <input type='email' placeholder='user@email.com'></input>
        </div>
        <div className="FormInput">
          <label>Password</label>
          <input type='password' placeholder='****************'></input>
        </div>

        <button className="SubmitBtn" onClick={props.onSubmit}>Sign-In</button>
    </div>
  );
}
