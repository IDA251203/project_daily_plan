import React from 'react'
import Navbar from './navbar';
import styles from '../styles/main.module.css'
import Information from './information';
import Basic from './basic';
import Pro from './pro';
import Enterprise from './enterprise';
import Testing from './testing';
import Statistics from './statistics';

const Mainpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
       <Navbar/>
      </div>
      <div className={styles.box2}>
        <Information/>
        <Basic/>
        <Pro/>
        <Enterprise/>
        <Testing/>
        <Statistics/>
      </div>
    </div>
  )
}

export default Mainpage;