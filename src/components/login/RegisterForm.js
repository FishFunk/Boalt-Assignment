import React, { useState } from 'react';

export default function RegisterForm(props) {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [pwd, setPwd] = useState('');

    function onFormSubmit(){
        //TODO: Form validation steps

        const user = {
            name: name,
            email: email,
            pwd: pwd
        }

        props.onSubmit(user);
    }


    return (
        <div className="Form">
            <div className="FormInput">
            <label>Full Name</label>
            <input type='text' placeholder='John Doe' onChange={(e)=>setName(e.target.value)}></input>
            </div>
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
