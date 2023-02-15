import React from 'react'
import styles from '../styles/Home.module.css'

const Statistics = () => {

  const sevenAm=localStorage.getItem("sevenam");
  const eightAm=localStorage.getItem("eightam");
  const nineAm=localStorage.getItem("nineam");
  const tenAm=localStorage.getItem("tenam");
  const elevenAm=localStorage.getItem("elevenam");
  const twelweAm=localStorage.getItem("twelweam");
  const onepm=localStorage.getItem("onepm");
  const twoPm=localStorage.getItem("twopm");
  const threepm=localStorage.getItem("threepm");
  const fourpm=localStorage.getItem("fourpm");
  const fivepm=localStorage.getItem("fivepm");
  const sixpm=localStorage.getItem("sixpm");
  const sevenpm=localStorage.getItem("sevenpm");
  const eightpm=localStorage.getItem("eightpm");
  const ninepm=localStorage.getItem("ninepm");
  const tenpm=localStorage.getItem("tenpm");

  const d = new Date();
  let hour = d.getHours();
  let minut= d.getMinutes();
  let plan;

  if(hour==7)
  {
    plan=sevenAm;
  }
  else if(hour==8)
  {
    plan=eightAm;
  }
  else if(hour==9)
  {
    plan=nineAm;
  }
  else if(hour==10)
  {
    plan=tenAm;
  }
  else if(hour==11)
  {
    plan=elevenAm;
  }
  else if(hour==12)
  {
    plan=twelweAm;
  }
  else if(hour==13)
  {
    plan=onepm;
  }
  else if(hour==14)
  {
    plan=twoPm;
  }
  else if(hour==15)
  {
    plan=threepm;
  }
  else if(hour==16)
  {
    plan=fourpm;
  }
  else if(hour==17)
  {
    plan=fivepm;
  }
  else if(hour==18)
  {
    plan=sixpm;
  }
  else if(hour==19)
  {
    plan=sevenpm;
  }
  else if(hour==20)
  {
    plan=eightpm;
  }
  else if(hour==21)
  {
    plan=ninepm;
  }
  else if(hour==22)
  {
    plan=tenpm;
  }
  

  return (
    <div className={styles.statisticsConatiner}>
      <h1></h1>
      <p>{plan}</p>
    </div>
  )
}
export default Statistics;