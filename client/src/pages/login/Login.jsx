import React, { useState, useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const email = useRef()
  const password = useRef()
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault()
    loginCall({email: email.current.value, password: password.current.value}, dispatch)
 }

 console.log(user);
  return (
    <div>
        <form onSubmit={handleClick} action="">
          <input type="email" placeholder='email' ref={email} required />
          <input type="text" minLength="6" placeholder='password'  ref={password} required />
          <button type='submit'>
            {isFetching ? <i className="fad fa-spinner-third"></i> : "Login"}</button>
        </form>
       
    </div>
  )
}
