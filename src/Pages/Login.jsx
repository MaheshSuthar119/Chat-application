import React, { useState } from 'react'
import styles from './Login.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // console.log(userCredential)
      // const user = auth.currentUser;
      // console.log(user);
      console.log("User logged in Successfully");
       
      // toast.success("User logged in Successfully", {
      //   position : "top-center",
      // });
    }
    catch(error){
      console.log(error.message);
      // toast.error(error.message);
    }
  }
  return (
    
     <div className={styles.Container}>
      <div className={styles.signup}>
      <h2 className={styles.heading}>Chat App</h2>
      <p className={styles.register}>Login</p>
      <form className={styles.form}>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button>Sign in</button>
      </form>
      <p className={styles.message}>You don't have an account? <Link to="/">Register</Link></p>
      </div>
    </div>
      
  )
}

export default Login