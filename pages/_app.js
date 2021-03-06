import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from "framer-motion";
import Head from 'next/head'
import '../styles/globals.scss'

// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={`app-container`}
    >
      <Head>
        <title>The Rabbit Hole</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>
        <Header />
        <div className="body___wrapper">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
      </motion.div>  
  )
}

export default MyApp
