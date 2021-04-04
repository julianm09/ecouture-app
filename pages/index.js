import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Button } from '../comps/Button'

export default function Home() {
  return (
    <div className={styles.container}>
        <Button></Button>
    </div>
  )
}
