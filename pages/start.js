import styles from '../styles/start.module.css'
import Link from 'next/link';
import Image from 'next/image';

function Start(){
  return (
    <div className={styles.container}>
        <div className={styles.container__main}>
            <div className={styles.container__main__animation}></div>
            <h1>Welcome, you can write your daily plans through this site</h1>
            <Link href="/form"><button className={styles.container__main__button}>Access</button></Link>
        </div>
    </div>
  )
}

export default Start;