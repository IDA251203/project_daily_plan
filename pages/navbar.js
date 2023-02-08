import React from 'react'
import styles from '../styles/navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <h1>DAILY</h1>
        <div className={styles.box}>
        <button className={styles.btn}>Products</button>
        <div className={styles.card}>
            <div className={styles.imgbox}></div>
            <p>Have question?</p>
            <button className={styles.btn1}>Contact us</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar;