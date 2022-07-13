import { NextPage } from 'next'

import Image from 'next/image'

import Bell from '../assets/svg/bell.svg';
import Start from '../assets/svg/start.svg';
import Tag from '../assets/svg/tag_sale.svg'


import styles from '../styles/Buller.module.scss';
import Posts from './Posts';
import Total from './Total';

const Buller: NextPage = () => {
    return (

        <div className={styles.container_money}>
            <div className={styles.balance}>
                <p>Saldo disponible</p>
                <span>
                    $ 1,499,970.00
                </span>
            </div>
            <div className={styles.icons}>
                <div className={styles.icons__list}>
                    <div>
                        <Image
                            src={Start}
                            className={styles.title__avatar}
                            alt="Picture of the author"
                            width="24px"
                            height="24px"
                        />
                        <span className={styles.subtitle}>
                            Crear logo
                        </span>
                    </div>
                    <div>
                        <Image
                            src={Tag}
                            className={styles.title__avatar}
                            alt="Picture of the author"
                            width="24px"
                            height="24px"
                        />
                        <span className={styles.subtitle}>
                            Pagar servicio
                        </span>
                    </div>
                    <div>
                        <Image
                            src={Bell}
                            className={styles.title__avatar}
                            alt="Picture of the author"
                            width="24px"
                            height="24px"
                        />
                        <span className={styles.subtitle}>
                            Suscripción
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.total}>
                <Total />
            </div>

            <div className={styles.posts}>
               <Posts />
            </div>
        </div>
    )
}

export default Buller;