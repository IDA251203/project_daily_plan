import React from 'react'
import styles from '../styles/Home.module.css'

const Statistics = () => {

  const sevenAm=window.localStorage.getItem("sevenam");
  const eightAm=window.localStorage.getItem("eightam");
  const nineAm=window.localStorage.getItem("nineam");
  const tenAm=window.localStorage.getItem("tenam");
  const elevenAm=window.localStorage.getItem("elevenam");
  const twelweAm=window.localStorage.getItem("twelweam");
  const onepm=window.localStorage.getItem("onepm");
  const twoPm=window.localStorage.getItem("twopm");
  const threepm=window.localStorage.getItem("threepm");
  const fourpm=window.localStorage.getItem("fourpm");
  const fivepm=window.localStorage.getItem("fivepm");
  const sixpm=window.localStorage.getItem("sixpm");
  const sevenpm=window.localStorage.getItem("sevenpm");
  const eightpm=window.localStorage.getItem("eightpm");
  const ninepm=window.localStorage.getItem("ninepm");
  const tenpm=window.localStorage.getItem("tenpm");

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