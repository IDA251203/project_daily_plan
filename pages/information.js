
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Information = () => {
  const name= localStorage.getItem("name");
  const lastname=localStorage.getItem("lastname");

  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <h1>Pricing Calculator</h1>
            <p className={styles.text1}>Setup Daily Plans</p>
        </div>
        
        

        <div className={styles.box}>
          <p className={styles.text3}>{name}</p>
          <p className={styles.text4}>{lastname}</p>
        </div>

        <div className={styles.box}>
            <div className={styles.profile}></div>

        </div>
    </div>
  )
}
export default Information;
