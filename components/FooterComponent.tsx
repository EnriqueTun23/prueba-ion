import { NextPage } from 'next';

import Image from 'next/image'

import House from '../assets/svg/house.svg';
import Bell from '../assets/svg/bell.svg';
import Credit from '../assets/svg/credit_card.svg';
import Start from '../assets/svg/start_two.svg';
import Money from '../assets/svg/money.svg';



import styles from '../styles/Footer.module.scss';

const FooterComponent: NextPage = () => {
    return (
        <div className={styles.footer}>
            <div>
                <Image
                    src={House}
                    className={styles.title__avatar}
                    alt="Picture of the author"
                    width="24px"
                    height="24px"
                />
                <Image
                    src={Money}
                    className={styles.title__avatar}
                    alt="Picture of the author"
                    width="24px"
                    height="24px"
                />
                <Image
                    src={Credit}
                    className={styles.title__avatar}
                    alt="Picture of the author"
                    width="24px"
                    height="24px"
                />
                <Image
                    src={Start}
                    className={styles.title__avatar}
                    alt="Picture of the author"
                    width="24px"
                    height="24px"
                />
                <Image
                    src={Bell}
                    className={styles.title__avatar}
                    alt="Picture of the author"
                    width="24px"
                    height="24px"
                />
            </div>
            <div className={styles.line}>
                <div />
            </div>
        </div>
    )
}

export default FooterComponent;