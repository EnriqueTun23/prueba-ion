import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import avatar from '../assets/img/person.jpg'

import styles from '../styles/Home.module.scss'
import Buller from '../components/Buller'
import FooterComponent from '../components/FooterComponent'

const  Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="Aplicacion de prueba creada para la validacion de prueba de ION" content="Aplicacion de prueba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <div className={styles.title}>
          <span className={styles.title__name}>Hola josé</span>
          <Image
            src={avatar}
            className={styles.title__avatar}
            alt="Picture of the author"
            width="24px"
            height="24px"
          />
        </div>

        <Buller />
      </section>
      <FooterComponent />
    </div>
  )
}

export default Home;
