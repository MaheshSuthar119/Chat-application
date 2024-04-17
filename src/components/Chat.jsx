import React from 'react'
import styles from './Chat.module.css'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'
function Chat() {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>Mahesh</span>
        <div className={styles.chatIcons}>
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat