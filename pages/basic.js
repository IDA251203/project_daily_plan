import React from 'react'
import styles from '../styles/Home.module.css'

import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const Basic = () => {
  return (
    <div className={styles.boxContainer}>
      <h1>Basic</h1>
      <p>For every user</p>

      <ul>
        <li>
          <Checkbox  defaultChecked color="secondary" for="value2" />
          <label id="value1">All analyics features</label>
        </li>
        <li>
          <Checkbox  defaultChecked color="secondary" for="value2"/>
          <label id="value2">Up to 250,000 tracked</label>
        </li>
        
        <li>
          <Checkbox  defaultChecked color="secondary" for="value2" />
          <label id="value1">base Support</label>
        </li>
        <li>
          <Checkbox  defaultChecked color="secondary" for="value2"/>
          <label id="value2">Up to 3 team members</label>
        </li>
      </ul>

      <Button variant="contained" className={styles.btn}>Add plan</Button>
      
    
    </div>
  )
}
export default Basic;