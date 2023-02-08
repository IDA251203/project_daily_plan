import styles from '../styles/form.module.css'
import Link from 'next/link';


function Form(){
  return (
    <div className={styles.container}>
        <div className={styles.container__main}>
          <div className={styles.container__main__formContainer}>
             <div className={styles.container__main__formContainer__form}>
              <div className={styles.container__main__formContainer__form__box}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
              </div>
              <div className={styles.container__main__formContainer__form__box}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Name"/>
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