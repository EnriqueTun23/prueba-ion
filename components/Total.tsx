import { NextPage } from 'next';

// import { IconName } from 'react-icons/md'
import Image from 'next/image'

import Money from '../assets/svg/money.svg';
import Credit from '../assets/svg/credit_card.svg';

import styles from '../styles/Total.module.scss';



const Total: NextPage = () => {
  return (
    <div className={styles.container_total}>
        <span className={styles.title}>
            Tu próximo pago
        </span>
        <span className={styles.price}>
            $28,860.00
        </span>
        <div className={styles.date}>
          <div className={styles.date__date}>
            <span className={styles.date__date__title}>
              Fecha de pago
            </span>
            <br />
            <span className={styles.date__date__subtitle}>
            16 Enero
            </span>
          </div>
          <div className={styles.date__button}>
            <span>Pagar ahora</span>
          </div>
        </div>
        <div className={styles.data_list}>
          <div className={styles.list}>
            <div className={styles.list__container}>
              <Image
                src={Money}
                className={styles.list__container__avatar}
                alt="Picture of the author"
                width="12px"
                height="13px"
              />
              <div className={styles.list__container__title}>
                Compras con TDC
                </div>

            </div>
            <div className={styles.list__total}>
              $27,260.00
            </div>
          </div>
        <div className={styles.list}>
          <div className={styles.list__container}>
            <Image
              src={Credit}
              className={styles.list__container__avatar}
              alt="Picture of the author"
              width="12px"
              height="13px"
            />
            <div className={styles.list__container__title}>
              Mis logros
            </div>

          </div>
          <div className={styles.list__total}>
            $1,600.00
          </div>
        </div>
        </div>
    </div>
  )
}

export default Total