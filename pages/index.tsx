import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NETFLIX </title>
        <meta name="description" content="a new version of the netflix with next and typescript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>NETFLIX</h1>
        <Link href="/about" >Go to about page!</Link>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
