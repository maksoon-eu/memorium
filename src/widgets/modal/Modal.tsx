import { gameVariant } from '../../types/types';
import { memo } from 'react';

import Button from '../button/Button';

import styles from './modal.module.scss';

interface ModalProps {
    handleNewGame: () => void;
    chooseGameVariant: (variant: gameVariant) => void;
}

const Modal = memo((props: ModalProps) => {
    const { handleNewGame, chooseGameVariant } = props;

    return (
        <div className={styles.modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__inner_text}>Выберите режим игры</div>
                <div className={styles.modal__inner_btns}>
                    <div
                        className={styles.modal__inner_btn}
                        onClick={() => {
                            handleNewGame();
                            chooseGameVariant(gameVariant.ANIMAL);
                        }}>
                        <Button>Animals</Button>
                    </div>
                    <div
                        className={styles.modal__inner_btn}
                        onClick={() => {
                            handleNewGame();
                            chooseGameVariant(gameVariant.FRUIT);
                        }}>
                        <Button>Fruits</Button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Modal;
