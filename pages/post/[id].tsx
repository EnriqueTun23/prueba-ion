import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import arrow from '../../assets/svg/arrow_back.svg'

import styles from '../../styles/Home.module.scss'


import { useEffect } from 'react';
import Router  from 'next/router'
import { useAppSelector } from '../../store/hooks';
import { dataSelector } from '../../store/data/selectors';

const Detail: NextPage = () => {

    const { person } = useAppSelector(dataSelector);

    const redirectHome = () => {
        Router.push('/')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Detalle de la app</title>
                <meta name="Aplicacion de prueba creada para la validacion de prueba de ION" content="Aplicacion de prueba" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.section}>
                <div className={styles.detail}>
                    <div className={styles.detail__buttons}>
                        <span onClick={() => redirectHome()}>
                            <Image
                                src={arrow}
                                alt="Person"
                                width="24px"
                                height="24px"
                            />
                        </span>
                        <span className={styles.detail__buttons__cancel}>
                            Cancelar
                        </span>
                    </div>
                    <div className={styles.detail__title}>
                        <h3>Disposición</h3>
                    </div>

                    <div className={styles.detail__card}>
                        <span className={styles.detail__card__subtitle}>
                            {person.species}
                        </span>
                        <span className={styles.detail__card__name}>
                            {person.name}
                        </span>
                    </div>

                    <div className={styles.detail__input}>
                        <span>{person.gender}</span>
                    </div>
                    
                    <div className={styles.detail__input}>
                        <span>
                            {person.status}
                        </span>
                    </div>

                    <div className={styles.detail__img}>
                        <span>
                            Personaje:
                        </span>
                        <Image
                            src={person.image}
                            alt="Person"
                            width="300px"
                            height="213px"
                            className={styles.detail__img__img}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export  default Detail;
