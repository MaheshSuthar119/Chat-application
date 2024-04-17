import React from 'react'
import styles from './Message.module.css'
function Message() {
  return (
    <div className={`${styles.message} ${styles.owner}`}>
      <div className={styles.messageInfo}>
        <img
         src='https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A='
         alt=''
        />
        <span>just now</span>
      </div>
      <div className={`${styles.messageContent} ${styles.messageContent1}`}>
        <p>hello</p>
        <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" alt="" />
      </div>
    </div>
  )
}

export default Message