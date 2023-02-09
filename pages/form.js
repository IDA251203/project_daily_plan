import styles from '../styles/form.module.css'
import Link from 'next/link';


function Form(){
  return (
    <div className={styles.container}>
        <div className={styles.container__main}>
        <h1>Daily Routine</h1>
          <div className={styles.container__main__formContainer}>
             <div className={styles.container__main__formContainer__form}>
              <div className={styles.container__main__formContainer__form__box}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Lastname"/>
                <input type="text" placeholder="7am:"/>
                <input type="text" placeholder="8am:"/>
                <input type="text" placeholder="9am:"/>
              </div>
              <div className={styles.container__main__formContainer__form__box}>
                <input type="text" placeholder="10am:"/>
                <input type="text" placeholder="11am:"/>
                <input type="text" placeholder="12am:"/>
                <input type="text" placeholder="1pm:"/>
                <input type="text" placeholder="2pm:"/>
              </div>
              <div className={styles.container__main__formContainer__form__box}>
                <input type="text" placeholder="3pm:"/>
                <input type="text" placeholder="4pm:"/>
                <input type="text" placeholder="5pm:"/>
                <input type="text" placeholder="6pm:"/>
                <input type="text" placeholder="7pm:"/>
              </div>
              <div className={styles.container__main__formContainer__form__box}>
                <input type="text" placeholder="8pm:"/>
                <input type="text" placeholder="9pm:"/>
                <input type="text" placeholder="10pm:"/>
              </div>
             </div>
          </div>
        <Link href="/mainpage"><button className={styles.container__main__button}>Confirmation and Access</button></Link>
        <Link href="/start"><button className={styles.container__main__button}>Back</button></Link>
        </div>
    </div>
  )
}

export default Form;