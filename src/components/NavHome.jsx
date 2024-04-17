import React from 'react'
import styles from './NavHome.module.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
function NavHome() {
  return (
    <div className={styles.home}>
        <div className={styles.container}>
            <div className={styles.sidebar}>
            <Sidebar/>
            </div>
            <div className={styles.chat}>
            <Chat/>
            </div>
        </div>
    </div>
  )
}

export default NavHome