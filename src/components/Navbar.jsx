import React from 'react'
import styles from './Navbar.module.css'
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = async() => {
    await signOut(auth);
    localStorage.setItem('token');
    localStorage.setItem('user');
    navigate('/login');
  }
  
  return (
    <div className={styles.navbar}>
        <span className={styles.logo}>Chat-App</span>
        <div className={styles.user}>
            <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" alt="" />
            <span className={styles.username}>Mahesh</span>
            <button onClick={handleLogout}>logout</button>
        </div>
    </div>
  )
}

export default Navbar