import styles from './Heading.module.css'
/* Pode ser qualquer nome no lugar do styles*/

export function Heading() {
    console.log(styles)

    return <h1 className={styles.heading} >Hello World (from App)</h1>
    // Utilizar duas classes de formatação no componente 
    // className={`${styles.heading} ${styles.purple}`}
}