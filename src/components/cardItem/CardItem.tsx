import { CardItemsI } from '../../types/types';
import { memo } from 'react';

import cardBackground from '../../assets/img/background-card.jpg';

import styles from './cardItem.module.scss';

interface cardItemsProps extends CardItemsI {
    i: number;
    correctCard: string[];
    openedCardsIndex: number[];
    openAllCards: boolean;
}

const CardItem = memo((props: cardItemsProps) => {
    const { name, correctCard, openedCardsIndex, i, openAllCards } = props;

    return (
        <div
            className={`${styles.cardItem} ${correctCard.includes(name) || openedCardsIndex.includes(i) || openAllCards ? styles.cardItem__active : ''}`}>
            <div className={styles.cardItem__inner}>
                <div className={`${styles.cardItem__face} ${styles.cardItem__front}`}>
                    <img
                        className={styles.cardItem__front_img}
                        src={cardBackground}
                        alt="card background"
                    />
                </div>
                <div className={`${styles.cardItem__face} ${styles.cardItem__back}`}>
                    <div className={styles.cardItem__back_img}>
                        <img src={require(`../../assets/img/${name}.png`)} alt="card background" />
                    </div>
                    <div className={styles.cardItem__face_name}>{name}</div>
                </div>
            </div>
        </div>
    );
});

export default CardItem;
