import { memo, ReactNode } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
    children: ReactNode;
}

const Button = memo(({ children }: ButtonProps) => {
    return <div className={styles.button}>{children}</div>;
});

export default Button;
