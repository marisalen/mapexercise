import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import HeaderComp from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Skytrain Expo Line</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/busicon.png" />
      </Head>
      <main className={styles.main}>
        <
        <Map/>
      </main>
    </>
  )
}
