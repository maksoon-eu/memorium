import Timer from '../../widgets/timer/Timer';

import styles from './sidebar.module.scss';

interface SidebarProps {
    startNewGame: boolean;
    endGame: boolean;
    counter: number;
}

const Sidebar = (props: SidebarProps) => {
    const { startNewGame, counter, endGame } = props;

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__inner}>
                <div className={styles.sidebar__timer}>
                    Time: <Timer endGame={endGame} startNewGame={startNewGame} />s
                </div>
                <div className={styles.sidebar__tries}>Tries: {counter}</div>
            </div>
        </div>
    );
};

export default Sidebar;
