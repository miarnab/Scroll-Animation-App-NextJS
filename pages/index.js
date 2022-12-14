import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/globals.css'
import Nav from '../components/Nav'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script type='text/javascript' src='/static/document.js'></Script>
        {/* Nav */}
        <Nav/>

        <section className="container">
          {/* First Section */}
            <FirstSection/>
          {/* Second Section */}
            <SecondSection/>
          {/* Third Section */}
            <ThirdSection/>
          {/* Fourth Section */}
            <FourthSection/>  
        </section>
      </div>
    )
}
