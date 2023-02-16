import React from 'react'
import styles from '../styles/Home.module.css';

import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
 
const Testing = () => {

  const sevenpm=window.localStorage.getItem("sevenpm");
  const eightpm=window.localStorage.getItem("eightpm");
  const ninepm=window.localStorage.getItem("ninepm");
  const tenpm=window.localStorage.getItem("tenpm");

  return (
    <div className={styles.boxContainer}>
      <h1>7pm - 10pm</h1>
      <p>The fourth part of the day</p>

      <ul>
        <li>
          <Checkbox color="secondary" for="value1" defaultChecked/>
          <label id="value1">{sevenpm}</label>
        </li>
        <li>
          <Checkbox color="secondary" for="value2" defaultChecked/>
          <label id="value2">{eightpm}</label>
        </li>
        
        <li>
          <Checkbox color="secondary" for="value3" defaultChecked/>
          <label id="value3">{ninepm}</label>
        </li>
        <li>
          <Checkbox color="secondary" for="value4" defaultChecked/>
          <label id="value4">{tenpm}</label>
        </li>
      </ul>

      <Button variant="contained" className={styles.btn}>Add plan</Button>
      
    
    </div>
  )
}
export default Testing;