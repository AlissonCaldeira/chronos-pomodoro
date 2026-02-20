import { useContext } from 'react'
import styles from './CountDown.module.css'
import { TaskContext } from '../../contexts/TaskContext'
/* Pode ser qualquer nome no lugar do styles*/


export function CountDown() {

    const taskContext = useContext(TaskContext)

    return (

        <div className={styles.container}>
            00:00<br />
            {taskContext.chave}
        </div>
    )
}