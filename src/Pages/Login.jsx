import React from 'react'
import styles from './Login.module.css'
function Login() {
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
      <p className={styles.message}>You don't have an account? <span>Register</span></p>
      </div>
    </div>
      
  )
}

export default Login