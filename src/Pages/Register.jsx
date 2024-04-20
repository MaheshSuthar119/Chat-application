import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth } from "../firebase";
import { auth } from "../firebase";
// import { useNavigate } from 'react-router-dom'

import styles from './Registration.module.css'
function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // const navigate =  useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      // navigate('/')
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className={styles.Container}>
      <div className={styles.signup}>
      <h2 className={styles.heading}>Chat App</h2>
      <p className={styles.register}>Registration</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
         type="text" 
         placeholder='Username'
         require
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
        <input type="email" placeholder='email'/>
        <input
         type="password"
         placeholder='password'
         require
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
        <input type="file"/>
        <button>Sign Up</button>
      </form>
      <p className={styles.message}>Do you have an account? <span>Login</span></p>
      </div>
    </div>
  )
}

export default Register