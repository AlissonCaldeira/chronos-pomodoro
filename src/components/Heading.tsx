import styles from './Heading.module.css'
/* Pode ser qualquer nome no lugar do styles*/

export function Heading(props) {
    // console.log(styles)
    console.log(props)
    return <h1 className={styles.heading} >{props.children}</h1>
    // Utilizar duas classes de formatação no componente 
    // className={`${styles.heading} ${styles.purple}`}
}