import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../Components/Home/Footer/Footer'
import Header from '../Components/Home/Header/Header'
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
          <Header />
        <Link href="/about" >Go to about page!</Link>

        <Footer />
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
