import { TimerIcon } from 'lucide-react'
import styles from './Logo.module.css'
/* Pode ser qualquer nome no lugar do styles*/


export function Logo() {
    return (

        <div className={styles.logo}>
            <a className={styles.logoLink} href=""><TimerIcon />
                <span>Chronos</span>
            </a>
        </div>
    )
}