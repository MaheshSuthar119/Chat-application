import React from 'react'
import styles from './Input.module.css'
import Attach from '../img/attach.png'
import Img from '../img/img.png'
function Input() {
  return (
    <div className= {styles.input}>
      <input type="text" placeholder='Type something....'/>
      <div className={styles.send}>
       <img src={Attach} alt="" />
          <input type='file' style={{display: 'none'}} id='file'/>
           <lable htmlFor='file'>
            <img src={Img} alt="" />
         </lable>
        <button>Send</button>
       </div> 
    </div>
  )
}

export default Input