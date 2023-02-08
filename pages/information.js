import React from 'react'
import styles from '../styles/Home.module.css'

const Information = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <h1>Pricing Calculator</h1>
            <p className={styles.text1}>Setup Daily Plans</p>
        </div>
        
        <div className={styles.box}>
           <div className={styles.search}></div>
           <p className={styles.text2}>Search...</p>
        </div>
        
        <div className={styles.box}>
           <p className={styles.text3}>Name</p>
           <p className={styles.text4}>Detail here</p>
        </div>
        
        <div className={styles.box}>
            <div className={styles.profile}></div>

        </div>
    </div>
  )
}
export default Information;
