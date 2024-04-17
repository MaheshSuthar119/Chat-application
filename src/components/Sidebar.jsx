import React from 'react'
import styles from './Sidebar.module.css'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar