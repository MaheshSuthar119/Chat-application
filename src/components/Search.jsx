import React from 'react'
import styles from './Search.module.css'
function Search() {
  return (
    <div className={styles.search}>
        <div className={styles.searchForm}>
            <input type="text" placeholder='find a user'/>
        </div>
        <div className={styles.userChat}>
            <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" alt="" />
            <div className={styles.userChatInfo}>
                <span>Mahesh</span>
            </div>
        </div>
    </div>
  )
}

export default Search