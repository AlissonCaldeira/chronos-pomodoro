
import styles from './Button.module.css'
import type React from 'react';

type ButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>

export function Button({ icon, color = 'green' /*Valor padrão*/, ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    )
}