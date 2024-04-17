import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "../firebase";

import styles from './Registration.module.css'
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <div className={styles.Container}>
      <div className={styles.signup}>
      <h2 className={styles.heading}>Chat App</h2>
      <p className={styles.register}>Registration</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Username'/>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <input type="file"/>
        <button>Sign Up</button>
      </form>
      <p className={styles.message}>Do you have an account?<span>Login</span></p>
      </div>
    </div>
  )
}

export default Register