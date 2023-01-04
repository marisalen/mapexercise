import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import HeaderComp from '../components/header'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })
const BodyText = styled.div`

`

export default function Home() {
  return (
    <>
      <Head>
        <title>Skytrain Expo Line</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/busicon.png" />
      </Head>
      <HeaderComp />
      <main className={styles.main}>

        <Map/>
        <BodyText>
        
Expo Line
The Expo Line operates two routes:

Waterfront Station (Downtown Vancouver) to King George Station (Surrey)

Waterfront Station (Downtown Vancouver) to Production Way-University Station (Burnaby)

Transfer to the Millennium Line at the following stations:

Commercial–Broadway Station

Lougheed Town Centre Station

Production Way–University Station

Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.

Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
        </BodyText>
      </main>
    </>
  )
}
