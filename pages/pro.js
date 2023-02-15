import React from 'react'
import styles from '../styles/Home.module.css'


import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const Pro = () => {

  const elevenAm=localStorage.getItem("elevenam");
  const twelweAm=localStorage.getItem("twelweam");
  const onepm=localStorage.getItem("onepm");
  const twoPm=localStorage.getItem("twopm");

  return (
    <div className={styles.boxContainer}>
    <h1>11am - 2pm</h1>
    <p>The second part of the day</p>

    <ul>
        <li>
          <Checkbox color="secondary" for="value1" checked="false"/>
          <label id="value1">{elevenAm}</label>
        </li>
        <li>
          <Checkbox color="secondary" for="value2" checked="false"/>
          <label id="value2">{twelweAm}</label>
        </li>
        
        <li>
          <Checkbox color="secondary" for="value3" checked="false"/>
          <label id="value3">{onepm}</label>
        </li>
        <li>
          <Checkbox color="secondary" for="value4" checked="false"/>
          <label id="value4">{twoPm}</label>
        </li>
      </ul>

    <Button variant="contained" className={styles.btn}>Add plan</Button>
    
  
  </div>
  )
}
export default Pro;