import { useCallback, useEffect, useState } from 'react';
import { gameVariant } from '../../types/types';

import CardGame from '../../components/cardGame/CardGame';
import Sidebar from '../../components/sidebar/Sidebar';
import Button from '../../widgets/button/Button';
import Modal from '../../widgets/modal/Modal';

const GamePage = () => {
    const [endGame, setEndGame] = useState<boolean>(false);
    const [startNewGame, setStartNewGame] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(true);
    const [chosenGameVariant, setChosenGameVariant] = useState<gameVariant>(gameVariant.FRUIT);

    useEffect(() => {
        if (startNewGame) {
            setCounter(0);
        }
    }, [startNewGame]);

    const handleEndGame = useCallback(() => {
        setEndGame((endGame) => !endGame);
    }, []);

    const handleNewGame = useCallback(() => {
        setStartNewGame((startNewGame) => !startNewGame);
    }, []);

    const chooseGameVariant = useCallback((variant: gameVariant) => {
        setChosenGameVariant(variant);
        setOpenModal((openModal) => !openModal);
    }, []);

    const handleCounter = useCallback(() => {
        setCounter((counter) => counter + 1);
    }, []);

    return (
        <>
            {openModal && (
                <Modal
                    handleNewGame={handleNewGame}
                    chooseGameVariant={chooseGameVariant}
                />
            )}
            <Sidebar endGame={endGame} startNewGame={startNewGame} counter={counter} />
            <CardGame
                handleNewGame={handleNewGame}
                chosenGameVariant={chosenGameVariant}
                handleEndGame={handleEndGame}
                handleCounter={handleCounter}
                endGame={endGame}
                startNewGame={startNewGame}
            />

            {endGame && (
                <div
                    onClick={() => {
                        handleEndGame();
                        handleNewGame();
                        setOpenModal(true);
                    }}>
                    <Button>Start over</Button>
                </div>
            )}
        </>
    );
};

export default GamePage;
