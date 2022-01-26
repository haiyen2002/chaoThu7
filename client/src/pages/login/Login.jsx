import React, { useState, useRef } from 'react';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleClick = (e) => {
    console.log(emailRef.current.value);
    e.preventDefault()
 }
  return (
    <div>
        <form onSubmit={handleClick} action="">
          <input type="email" placeholder='email' onChange={(e)=>(setEmail(e.target.value))} ref={emailRef} required />
          <input type="text" minLength="6" placeholder='password' onChange={(e)=>(setPassword(e.target.value))} ref={passwordRef} required />
          <button>Login</button>
        </form>
       
    </div>
  )
}
