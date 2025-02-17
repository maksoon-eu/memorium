import { useState, useEffect, memo } from 'react';

interface TimerProps {
    startNewGame: boolean;
    endGame: boolean;
}

const Timer = memo(({ startNewGame, endGame }: TimerProps) => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        if (!endGame && startNewGame) {
            setSeconds(0);
        }

        if (endGame || !startNewGame) return;

        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [endGame, startNewGame]);

    return <>{seconds}</>;
});

export default Timer;
