import React from 'react'
import styles from './Home.module.css'
import Register from './Register'
import Login from './Login'
import {
  Routes,
  Route,
} from "react-router-dom";
import Protected from '../Protected/Protected';
import { ToastContainer } from 'react-toastify';

function Home() {
  return (
    <div>
      <Routes> 
          <Route exact path="/" element={<Register/>} /> 
          <Route path="/login" element={<Login/>} />  
      </Routes> 
      <ToastContainer />
      {/* <Register/> */}
      {/* <Login/>  */}
         
    </div>
  )
}

export default Home
// {/* <Routes> 
//     <Route exact path="register" element={<Register/>} /> 
//     <Route path="login" element={<Login/> } />  
// </Routes> */}
//   {/* <Route path="Protected" element={<Protected/> }/>  */}