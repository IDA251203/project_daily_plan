import styles from '../styles/form.module.css'
import Link from 'next/link';
import axios from 'axios'
import React , {useState , useEffect} from 'react'

// function debug(){
//   $('form input[type=text]').each(function(){
//     console.log(this.name+': '+this.value);
//     localStorage.setItem(this.name, this.value);
//   });
// }


function Form() {

  const url = "https://halal-uz-backend-production.up.railway.app/plan"
    const [name , setName] = useState("")
    const [lastname , setLastName] = useState("")
    const [sevenam, setSevenAm]= useState("")
    const [eightam, setEightAm]= useState("")
    const [nineam, setNineAm] = useState("")
    const [tenam, setTenAm] = useState("")
    const [elevenam, setElevenAm] = useState("")
    const [twelweam, setTwelweAm] = useState("")
    const [onepm, setOnePm]= useState("")
    const [twopm, setTwoPm]= useState("")
    const [threepm, setThreePm]= useState("")
    const [fourpm, setFourPm]= useState("")
    const [fivepm, setFivePm]= useState("")
    const [sixpm, setSixPm]= useState("")
    const [sevenpm, setSevenPm]= useState("")
    const [eightpm, setEightPm]= useState("")
    const [ninepm, setNinePm]= useState("")
    const [tenpm, setTenPm]= useState("")

    let data = {
      name ,
      lastname,
      sevenam,
      eightam,
      nineam,
      tenam,
      elevenam,
      twelweam,
      onepm,
      twopm,
      threepm,
      fourpm,
      fivepm,
      sixpm,
      sevenpm,
      eightpm,
      ninepm,
      tenpm
    }

    function saveData() {
      localStorage.setItem("name",name);
      localStorage.setItem("lastname",lastname);
      localStorage.setItem("sevenam",sevenam);
      localStorage.setItem("eightam",eightam);
      localStorage.setItem("nineam",nineam);
      localStorage.setItem("tenam",tenam);
      localStorage.setItem("elevenam",elevenam);
      localStorage.setItem("twelweam",twelweam);
      localStorage.setItem("onepm",onepm);
      localStorage.setItem("twopm",twopm);
      localStorage.setItem("threepm",threepm);
      localStorage.setItem("fourpm",fourpm);
      localStorage.setItem("fivepm",fivepm);
      localStorage.setItem("sixpm",sixpm);
      localStorage.setItem("sevenpm",sevenpm);
      localStorage.setItem("eightpm",eightpm);
      localStorage.setItem("ninepm",ninepm);
      localStorage.setItem("tenpm",tenpm);
    }

 


  return (
 
    <div className={styles.container}>
      <div className={styles.container__main}>
        <h1>Daily Routine</h1>
        
        <form action="/action_page.php" method="post" target="_self">

        <div className={styles.container__main__formContainer}>
          <div className={styles.container__main__formContainer__form}>
            <div className={styles.container__main__formContainer__form__box}>
              
              <input type="text" placeholder="Name" name='name' value={name}  onChange={(e) => {setName(e.target.value)}}/>
              <input type="text" placeholder="Lastname" name='lastname' value={lastname}    onChange={(e) => {setLastName(e.target.value)}}/>
              <input type="text" placeholder="7am:" name='sevenAm' value={sevenam}    onChange={(e) => {setSevenAm(e.target.value)}}/>
              <input type="text" placeholder="8am:" name='eightAm' value={eightam}   onChange={(e) => {setEightAm(e.target.value)}} />
              <input type="text" placeholder="9am:" name='nineAm' value={nineam}   onChange={(e) => {setNineAm(e.target.value)}} />
            </div>
            <div className={styles.container__main__formContainer__form__box}>
              <input type="text" placeholder="10am:" name='tenAm' value={tenam}    onChange={(e) => {setTenAm(e.target.value)}}/>
              <input type="text" placeholder="11am:" name='elevenAm' value={elevenam}    onChange={(e) => {setElevenAm(e.target.value)}}/>
              <input type="text" placeholder="12am:" name='twelweAm' value={twelweam}    onChange={(e) => {setTwelweAm(e.target.value)}}/>
              <input type="text" placeholder="1pm:" name='onePm' value={onepm}   onChange={(e) => {setOnePm(e.target.value)}} />
              <input type="text" placeholder="2pm:" name='twoPm' value={twopm}   onChange={(e) => {setTwoPm(e.target.value)}} />
            </div>
            <div className={styles.container__main__formContainer__form__box}>
              <input type="text" placeholder="3pm:" name='threePm' value={threepm}    onChange={(e) => {setThreePm(e.target.value)}}/>
              <input type="text" placeholder="4pm:" name='fourPm' value={fourpm}   onChange={(e) => {setFourPm(e.target.value)}} />
              <input type="text" placeholder="5pm:" name='fivePm' value={fivepm}    onChange={(e) => {setFivePm(e.target.value)}}/>
              <input type="text" placeholder="6pm:" name='sixPm' value={sixpm}    onChange={(e) => {setSixPm(e.target.value)}}/>
              <input type="text" placeholder="7pm:" name='sevenPm' value={sevenpm}   onChange={(e) => {setSevenPm(e.target.value)}} />
            </div>
            <div className={styles.container__main__formContainer__form__box}>
              <input type="text" placeholder="8pm:" name='eightPm' value={eightpm}   onChange={(e) => {setEightPm(e.target.value)}} />
              <input type="text" placeholder="9pm:" name='ninePm' value={ninepm}    onChange={(e) => {setNinePm(e.target.value)}}/>
              <input type="text" placeholder="10pm:" name='tenPm' value={tenpm}   onChange={(e) => {setTenPm(e.target.value)}} />
              <input type="text" placeholder="woman or man(woman-w, man-m)" name='tenPm' />
            </div>
            {/* <Link href="/mainpage"><button className={styles.container__main__button} onClick={debug}>Confirmation and Access</button></Link> */}
            {/* <Link href="/start"><button className={styles.container__main__button}>Back</button></Link> */}
           
          </div>
        </div>
        <Link href="/mainpage"><button type="submit" className={styles.container__main__button} onClick={saveData}>Confirmation and Access</button></Link>
        <Link href="/start"><button className={styles.container__main__button}>Back</button></Link>
        
        </form>

      </div>
    </div>
  )
}

export default Form;