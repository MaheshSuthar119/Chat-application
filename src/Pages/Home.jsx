import React from 'react'
import styles from './Home.module.css'
import Register from './Register'
import Login from './Login'
import {
  Routes,
  Route,
} from "react-router-dom";
import Protected from '../Protected/Protected';

function Home() {
  return (
    <div>
      <Register/>
      <Login/> 
         
    </div>
  )
}

export default Home
// {/* <Routes> 
//     <Route exact path="register" element={<Register/>} /> 
//     <Route path="login" element={<Login/> } />  
// </Routes> */}
//   {/* <Route path="Protected" element={<Protected/> }/>  */}