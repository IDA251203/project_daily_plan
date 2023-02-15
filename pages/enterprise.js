import React from 'react'
import styles from '../styles/Home.module.css'


import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';



const Enterprise = () => {
  
  const threepm=localStorage.getItem("threepm");
  const fourpm=localStorage.getItem("fourpm");
  const fivepm=localStorage.getItem("fivepm");
  const sixpm=localStorage.getItem("sixpm");

  return (
    <div className={styles.boxContainer}>
<h1>3pm - 6pm</h1>
<p>The third part of the day</p>

<ul>
        <li>
          <Checkbox color="secondary" for="value1" defaultChecked/>
          <label id="value1">{threepm}</label>
        </li>
        <li>
          <Checkbox color="secondary" for="value2" defaultChecked/>
          <label id="value2">{fourpm}</label>
        </li>
        
        <li>
          <Checkbox color="secondary" for="value3" defaultChecked/>
          <label id="value3">{fivepm}</label>
        </li>
        <li>
          <Checkbox color="secondary" for="value4" defaultChecked/>
          <label id="value4">{sixpm}</label>
        </li>
      </ul>
<Button variant="contained" className={styles.btn}>Add plan</Button>


</div>
  )
}
export default Enterprise;