import { HistoryIcon, HouseIcon, Settings, SunIcon } from 'lucide-react'
import styles from './Menu.module.css'
/* Pode ser qualquer nome no lugar do styles*/


export function Menu() {
    return (

        <nav className={styles.menu}>
            <a className={styles.menuLink} href=""><HouseIcon /></a>
            <a className={styles.menuLink} href=""><HistoryIcon /></a>
            <a className={styles.menuLink} href=""><Settings /></a>
            <a className={styles.menuLink} href=""><SunIcon /></a>

        </nav>
    )
}