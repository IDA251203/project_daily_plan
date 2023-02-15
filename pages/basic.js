import React from 'react'
import styles from '../styles/Home.module.css'

import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const Basic = () => {
  const sevenAm=localStorage.getItem("sevenam");
  const eightAm=localStorage.getItem("eightam");
  const nineAm=localStorage.getItem("nineam");
  const tenAm=localStorage.getItem("tenam");
  return (
    <div className={styles.boxContainer}>
      <h1>7am - 10am</h1>
      <p>The first part of the day</p>

      <ul>
        <li>
          <Checkbox  defaultChecked color="secondary" for="value1" />
          <label id="value1">{sevenAm}</label>
        </li>
        <li>
          <Checkbox  defaultChecked color="secondary" for="value2"/>
          <label id="value2">{eightAm}</label>
        </li>
        
        <li>
          <Checkbox  defaultChecked color="secondary" for="value3" />
          <label id="value3">{nineAm}</label>
        </li>
        <li>
          <Checkbox  defaultChecked color="secondary" for="value4"/>
          <label id="value4">{tenAm}</label>
        </li>
      </ul>

      <Button variant="contained" className={styles.btn}>Add plan</Button>
      
    
    </div>
  )
}
export default Basic;