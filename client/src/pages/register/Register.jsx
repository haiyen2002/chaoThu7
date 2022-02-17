import axios from 'axios';
import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const email = useRef()
  const password = useRef()
  const username = useRef()
  const passwordAgain = useRef()
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault()
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords dont match! ")
    }else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }

      try {
        await axios.post("http://localhost:5000/api/auth/register", user)
        history.push("/login")
      } catch (error) {
        console.log(error);
      }
    }
 }

  return (
    <div>Register
         <form action="" onSubmit={handleClick}>
          <input ref={email} type="email" placeholder='email' required /><br />
          <input ref={username} type="username" placeholder='username' required /><br />
          <input ref={password} type="text" minLength="6" placeholder='password' required /><br />
          <input ref={passwordAgain} type="text" minLength="6" placeholder='password again' required /><br />
          <button type='submit'>Sign Up </button><br />
          <button type='submit'>log into account </button>
            
        </form>
    </div>
  )
}
