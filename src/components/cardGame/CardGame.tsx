import {
    cardGameItemsAnimalName,
    cardGameItemsFruitName,
    CardItemsI,
    gameVariant,
} from '../../types/types';
import { useEffect, useMemo, useRef, useState } from 'react';

import CardItem from '../cardItem/CardItem';

import styles from './cardGame.module.scss';

const cardGameItemsFruit: CardItemsI[] = [
    {
        name: cardGameItemsFruitName.APPLE,
    },
    {
        name: cardGameItemsFruitName.BANANA,
    },
    {
        name: cardGameItemsFruitName.GRAPE,
    },
    {
        name: cardGameItemsFruitName.ORANGE,
    },
    {
        name: cardGameItemsFruitName.PEAR,
    },
    {
        name: cardGameItemsFruitName.STRAWBERRY,
    },
    {
        name: cardGameItemsFruitName.APPLE,
    },
    {
        name: cardGameItemsFruitName.BANANA,
    },
    {
        name: cardGameItemsFruitName.GRAPE,
    },
    {
        name: cardGameItemsFruitName.ORANGE,
    },
    {
        name: cardGameItemsFruitName.PEAR,
    },
    {
        name: cardGameItemsFruitName.STRAWBERRY,
    },
];

const cardGameItemsAnimals: CardItemsI[] = [
    {
        name: cardGameItemsAnimalName.BEAR,
    },
    {
        name: cardGameItemsAnimalName.CAT,
    },
    {
        name: cardGameItemsAnimalName.DOG,
    },
    {
        name: cardGameItemsAnimalName.ELEPHANT,
    },
    {
        name: cardGameItemsAnimalName.GIRAFFE,
    },
    {
        name: cardGameItemsAnimalName.TIGER,
    },
    {
        name: cardGameItemsAnimalName.BEAR,
    },
    {
        name: cardGameItemsAnimalName.CAT,
    },
    {
        name: cardGameItemsAnimalName.DOG,
    },
    {
        name: cardGameItemsAnimalName.ELEPHANT,
    },
    {
        name: cardGameItemsAnimalName.GIRAFFE,
    },
    {
        name: cardGameItemsAnimalName.TIGER,
    },
];

interface CardGameProps {
    chosenGameVariant: gameVariant;
    handleCounter: () => void;
    handleNewGame: () => void;
    handleEndGame: () => void;
    endGame: boolean;
    startNewGame: boolean;
}

const CardGame = (props: CardGameProps) => {
    const { handleEndGame, endGame, handleCounter, startNewGame, chosenGameVariant } = props;

    const [openedCardsName, setOpenedCardsName] = useState<string[] | []>([]);
    const [openedCardsIndex, setOpenedCardsIndex] = useState<number[]>([]);
    const [correctCard, setCorrectCard] = useState<string[]>([]);
    const [openAllCards, setOpenAllCards] = useState<boolean>(false);
    const [disabledAllCards, setDisabledAllCards] = useState<boolean>(false);

    const soundRef = useRef(new Audio(require('../../assets/sounds/click.mp3')));

    const playSound = () => {
        soundRef.current.currentTime = 0;
        soundRef.current.play();
    };

    const shuffledCards = useMemo(() => {
        if (chosenGameVariant === gameVariant.ANIMAL) {
            return [...cardGameItemsAnimals].sort(() => Math.random() - 0.5);
        } else {
            return [...cardGameItemsFruit].sort(() => Math.random() - 0.5);
        }
    }, [chosenGameVariant]);

    useEffect(() => {
        if (startNewGame) {
            setDisabledAllCards(true);
            setTimeout(() => {
                setOpenAllCards(true);
            }, 3000);
            setTimeout(() => {
                setOpenAllCards(false);
                setDisabledAllCards(false);
            }, 8000);
        }
    }, [startNewGame]);

    useEffect(() => {
        if (openedCardsName.length === 2) {
            const [firstOpenedCardName, secondOpenedCardName] = openedCardsName;
            if (firstOpenedCardName === secondOpenedCardName) {
                setCorrectCard((correctCard) => [...correctCard, firstOpenedCardName]);
            }

            handleCounter();

            setTimeout(() => {
                setOpenedCardsName([]);
                setOpenedCardsIndex([]);
            }, 1000);
        }
    }, [openedCardsName]);

    useEffect(() => {
        if (correctCard.length === 6) {
            handleEndGame();
            // handleNewGame();
        }
    }, [correctCard]);

    useEffect(() => {
        if (!endGame) {
            setCorrectCard([]);
        }
    }, [endGame]);

    const clickCard = (name: string, i: number) => {
        if (
            !openedCardsIndex.includes(i) &&
            !correctCard.includes(name) &&
            openedCardsIndex.length < 2 &&
            !disabledAllCards
        ) {
            playSound();
            setOpenedCardsName((openedCardsName) => [...openedCardsName, name]);
            setOpenedCardsIndex((openedCardsIndex) => [...openedCardsIndex, i]);
        }
    };

    const cardItemsList = shuffledCards.map(({ name }, i) => {
        return (
            <div key={i} onClick={disabledAllCards ? undefined : () => clickCard(name, i)}>
                <CardItem
                    openedCardsIndex={openedCardsIndex}
                    correctCard={correctCard}
                    i={i}
                    openAllCards={openAllCards}
                    name={name}
                />
            </div>
        );
    });
    return <div className={styles.cardGame}>{cardItemsList}</div>;
};

export default CardGame;
